import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import cookie from 'react-cookies';
import Rentedmodal from './Rentmodal'
import Carscard from './carsCard'
import Ownermodal from './Ownermodal'
import Search from './Search'
import './cars.css'
import './searchInput.scss'
import { LoginContext } from '../signUp/Auth';
import Carousel from "react-multi-carousel";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default function Cars() {
    const context = useContext(LoginContext); 
    // const token = context.token
    const [searchCars, setSearchCars] = useState([])
    const [showRentModal, setShowRentModal] = useState(false)
    const [rentedCar, setRentedCar] = useState({})
    const [showCarOwnerModal, setShowCarOwnerModal] = useState(false)
    const [carOwner, setCarOwner] = useState({})
    

    async function getCarOwner(id) {
        const res = await axios.get(`https://book-me401.herokuapp.com/getuser/${id}`)
        console.log(res.data);
            setCarOwner(res.data)        
    }

    useEffect(async () => {        
        // const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');        
        // const token = qs.get('token') || cookieToken || null;
        
        console.log(cookieToken);
        let config = {
            method: 'get',
            url: 'https://book-me401.herokuapp.com/getallcar',
            headers: {
                'Authorization': `Bearer ${cookieToken}`
            },
            data: ''
        };
        let res = await axios(config)
        setSearchCars(res.data)
        console.log(searchCars, 'searchCars -=====');
    }, [])
    
    return (
        <div className='Cars'>
            <section className='searchPageHero'>
             <Search 
             searchCars={searchCars} 
             setSearchCars={setSearchCars} />
            </section>
          
                    <>
                    <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                      {searchCars.map((car, idx) => {
                return (    
                        <Carscard key={idx}
                        searchCars={car}
                        showRentModal={showRentModal}
                        setShowRentModal={setShowRentModal}
                        setRentedCar={setRentedCar}
                        setShowCarOwnerModal={setShowCarOwnerModal}
                        getCarOwner={getCarOwner}
                        
                    />
                    )
                })}
                   
                  </Carousel>;                
                  </>
                
          
            <Rentedmodal
                showRentModal={showRentModal}
                setShowRentModal={setShowRentModal}
                rentedCar={rentedCar} />

            <Ownermodal
                showCarOwnerModal={showCarOwnerModal}
                setShowCarOwnerModal={setShowCarOwnerModal}
                carOwner={carOwner}
                 />

        </div>
    )
}
