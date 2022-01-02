import React, { useState, useEffect } from 'react'
import LocationModel from './locationModel'
import Card from './owner-car-card/card'
import Updatecar from './owner-car-card/Updatecar'
import axios from 'axios'
import './button.css'


export default function Owner() {
   
    const [showEdit, setShowEdit] = useState(false);
    const [selectedCar, setSelectedCar] = useState({});   
    const [myCars, setMyCars] = useState([])
    const [showAddCar, setShowAddCar ] = useState(false)

    const [interval, setIntervalfunc] = useState(0);
    const [show, setShow] = useState(false);
    const [location, setlocation] = useState(`https://maps.locationiq.com/v3/staticmap?key=pk.8a08bd062ba2953e6a5c30563ccd2ee1&cente[…]e=480x480&markers=icon:large-red-cutout%7C${randomcordinate(31879945, 32028358)},${randomcordinate(35847715, 36037897)}`);
    function randomcordinate(min, max) { // min and max included
        let cordenate = `${Math.floor(Math.random() * (max - min + 1) + min)}`;
        return cordenate.substring(0, 2) + "." + cordenate.substring(2, cordenate.length);
    }
    const handleClick = () => {
        setShow(!show)
        if (show) {
            clearInterval(interval);
            setIntervalfunc(0);
            return;
        }
        const newIntervalId = setInterval(() => {

           let url = (`https://maps.locationiq.com/v3/staticmap?key=pk.8a08bd062ba2953e6a5c30563ccd2ee1&cente[…]e=480x480&markers=icon:large-red-cutout%7C${randomcordinate(31879945, 32028358)},${randomcordinate(35847715, 36037897)}`);
            setlocation(url)
        }, 10000);
        setIntervalfunc(newIntervalId);
    };

    function handelShowEdit(car) {
        setSelectedCar(car)
        setShowEdit(true)
    }

    useEffect(async () => {
        let config = {
            method: 'get',
            url: 'https://book-me401.herokuapp.com/getmycar',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkIiwiaWF0IjoxNjQwOTY5MzcwfQ.-fsobjjqAhp0TQP0nigtUx9adzGkJjRQc3ZFRhsn1Gg'
            },
            data: ''
        };
        let res = await axios(config)
        setMyCars(res.data)

    }, [])

    async function handelSubmit(event) {
        event.preventDefault()
        const object = {
            "name": event.target.name.value,
            "carType": event.target.carType.value,
            "model": event.target.model.value,
            "photo": event.target.photo.value,
            "rentCost": `${event.target.rentCost.value}${event.target.select.value}`,
            "carStatus": event.target.carStatus.value,
            "status": "avaliable"
        }

        let config = {
            method: 'post',
            url: 'https://book-me401.herokuapp.com/addcar',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkIiwiaWF0IjoxNjQwOTY5MzcwfQ.-fsobjjqAhp0TQP0nigtUx9adzGkJjRQc3ZFRhsn1Gg',
                'Content-Type': 'application/json'
            },
            data: object
        };
        let res = await axios(config)
        setMyCars([...myCars, res.data])
        setShowAddCar(false)
    }
    console.log(myCars, 'after add --------------------');
    return (
        <div style={{ marginTop: '60px' }}>
            {
                showAddCar?
            <form onSubmit={handelSubmit}>
                <label>Car Name</label>
                <input placeholder='name' type='text' name='name' required />
                <label>Car Type</label>
                <input placeholder='car Type' type='text' name='carType' required />
                <label>Model</label>
                <input placeholder='model' type='text' name='model' required />
                <label>Photo</label>
                <input placeholder='photo' type='text' name='photo' required />
                <label>Rent Cost</label>
                <input placeholder='rent Cost' type='number' name='rentCost' required />
                <select name='select' required >
                    <option value='/hour' >Hour</option>
                    <option value='/day'>Day</option>
                    <option value='/month' >Month</option>
                </select>
                <label>Car Status</label>
                <input placeholder='car Status' type='text' name='carStatus' required />
                <button className='button-77' type='supmit'>Submit</button>
            </form>: <button className='button-77' onClick={()=>setShowAddCar(true)}>Add New Car</button>
            }
            <section>
                {myCars.map((car, idx) => {
                    return (
                        <Card key={idx}
                            handleShow={handleClick}
                            car={car}
                            handelShowEdit={handelShowEdit}
                            myCars={myCars}
                            setMyCars={setMyCars}

                        />

                    )
                })}
            </section>
            <LocationModel
                show={show}
                handleClick={handleClick}
                setShow = {setShow}
                location={location}
                 />
            <Updatecar
                selectedCar={selectedCar}
                setShowEdit={setShowEdit}
                showEdit={showEdit}
                setMyCars={setMyCars}
                myCars={myCars} />
        </div>
    )
}
