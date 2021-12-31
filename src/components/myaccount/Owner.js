import React, { useState, useEffect } from 'react'
import LocationModel from './locationModel'

import axios from 'axios'


export default function Owner() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [myCars, setMyCars] = useState([])

  
    useEffect(async () => {
        let config = {
            method: 'get',
            url: 'http://localhost:3030/getmycar',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcndhbiIsImlhdCI6MTY0MDk1NDIzM30.btmG9xS88SwvLYvvgNq2Vpv-dmmZWfRbb_svMryIFv4'
            },
            data: ''
        };
        let res = await axios(config)
        setMyCars(res.data)
    }, [])
    console.log(myCars, 'useeffect===================');

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
            url: 'http://localhost:3030/addcar',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcndhbiIsImlhdCI6MTY0MDk1NDIzM30.btmG9xS88SwvLYvvgNq2Vpv-dmmZWfRbb_svMryIFv4',
                'Content-Type': 'application/json'
            },
            data: object
        };
        let res = await axios(config)
        setMyCars([...myCars, res.data])
    }
    console.log(myCars, 'after add --------------------');
    return (
        <div style={{ marginTop: '60px' }}>
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
                <button type='supmit'>Submit</button>
            </form>
            <section>
                {myCars.map(car => {
                    return (
                        <>
                            <h3>{car.name}</h3>
                            <button onClick={()=>handleShow()}>get location</button>
                        </>
                    )
                })}
            </section>
                    <LocationModel  
                    show = {show}                 
                    handleClose={handleClose}
                    handleShow={handleShow} />
            
        </div>
    )
}
