import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Rentedmodal from './Rentmodal'
import Carscard from './carsCard'
import Ownermodal from './Ownermodal'
import Search from './Search'
import './cars.css'
import './searchInput.scss'

export default function Cars() {
    const obj = {
        "id": 1,
        "username": "samah",
        "password": "123",
        "phone": "079111111",
        "Adress": "Amman",
        "status": "null",
        "role": "owner",
        "createdAt": "2021-12-01T08:32:42.588Z",
        "updatedAt": "2021-12-01T08:34:44.095Z"
    }
    const [searchCars, setSearchCars] = useState([])
    const [showRentModal, setShowRentModal] = useState(false)
    const [rentedCar, setRentedCar] = useState({})
    const [showCarOwnerModal, setShowCarOwnerModal] = useState(false)
    const [carOwner, setCarOwner] = useState(obj)

    async function getCarOwner(id) {
        if (!carOwner) {

            const res = await axios.get(`https://lkom-k.herokuapp.com/getallcar/${id}`)
            setCarOwner(res.data)
        }

    }

    useEffect(async () => {
        let config = {
            method: 'get',
            url: 'https://lkom-k.herokuapp.com/getallcar',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkIiwiaWF0IjoxNjQxMTM5NzYxfQ.8AkDl39_I_r5C36RyVz76UAjGJ5we3LpD0Gf2twc4kg'
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
             <Search />
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
                carOwner={carOwner} />

        </div>
    )
}
