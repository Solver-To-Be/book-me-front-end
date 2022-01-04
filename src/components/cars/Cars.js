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
        
        console.log(context.token);
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
