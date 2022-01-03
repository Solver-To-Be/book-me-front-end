import React from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'


export default function Updatecar(props) {
    async function handelSubmit(event) {
        event.preventDefault()
        const object = {
            "name": event.target.name.value,
            "carType": event.target.carType.value,
            "model": event.target.model.value,
            "photo": event.target.photo.value,
            "rentCost": `${event.target.rentCost.value}${event.target.price.value}`,
            "carStatus": event.target.carStatus.value,
            "status": event.target.select.value
        }
        let config = {
            method: 'put',
            url: `https://book-me401.herokuapp.com/updatecar/${props.selectedCar.id}`,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFobWFkIiwiaWF0IjoxNjQxMTk2NTgyfQ.baZ8MGjs4jYJzZzEMjPUGhogKpZxojLujSwPxmeDJAE',
                'Content-Type': 'application/json'
            },
            data: object
        };
        const res = await axios(config)
        const updatedCarsList = props.myCars.map(car => {
            if (car.id !== res.data.id) { return car } else { return res.data }
        })
        props.setMyCars(updatedCarsList)
        // console.log(updatedCarsList,'here is the ubdated response');
        console.log(props.myCars,'here is the state');
        props.setShowEdit(false)

    }

    function handleClose() {
        props.setShowEdit(false)
    }

    return (
        <div>
            <Modal
                show={props.showEdit}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handelSubmit}>
                        <label>Car Name</label>
                        <input defaultValue={props.selectedCar.name} type='text' name='name' />
                        <label>Car Type</label>
                        <input defaultValue={props.selectedCar.carType} type='text' name='carType' />
                        <label>Model</label>
                        <input defaultValue={props.selectedCar.model} type='text' name='model' />
                        <label>Photo</label>
                        <input defaultValue={props.selectedCar.photo} type='text' name='photo' />
                        <label>Rent Cost</label>
                        <input defaultValue={parseInt(props.selectedCar.rentCost)} type='number' name='rentCost' />
                        <select name='price'  >
                            <option value='/hour' >Hour</option>
                            <option value='/day'>Day</option>
                            <option value='/month' >Month</option>
                        </select>
                        <label>Car Status</label>
                        <input defaultValue={props.selectedCar.carStatus} type='text' name='carStatus' />
                        <select name='select'  >
                            <option value='avaliable' >Avaliable</option>
                            <option value='taken'>Taken</option>
                        </select>
                        <button type='supmit'>Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
