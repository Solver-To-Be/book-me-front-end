import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Rentedmodal from './Rentmodal'
import Carscard from './carsCard'
import Ownermodal from './Ownermodal'
import Search from './Search'
import './cars.css'
import './searchInput.scss'

export default function Cars() {

    const [searchCars, setSearchCars] = useState([])
    const [showRentModal, setShowRentModal] = useState(false)
    const [rentedCar, setRentedCar] = useState({})
    const [showCarOwnerModal, setShowCarOwnerModal] = useState(false)
    const [carOwner, setCarOwner] = useState({})
    

    async function getCarOwner(id) {
        
            const res = await axios.get(`https://book-me401.herokuapp.com/getuser/${id}`)
            setCarOwner(res.data)
        
    }

    useEffect(async () => {
        let config = {
            method: 'get',
            url: 'https://book-me401.herokuapp.com/getallcar',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkIiwiaWF0IjoxNjQxMTk2NTgyfQ.baZ8MGjs4jYJzZzEMjPUGhogKpZxojLujSwPxmeDJAE'
            },
            data: ''
        };
        let res = await axios(config)
        setSearchCars(res.data)
        console.log(searchCars, 'searchCars -=====');
    }, [])
    console.log(rentedCar, 'rented car =====');
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
