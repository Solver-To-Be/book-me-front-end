import React, { useContext } from 'react'
import { LoginContext } from '../../signUp/Auth';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Heroacc.css'


export default function Updatecar(props) {
    const context = useContext(LoginContext);
    async function handelSubmit(event) {
        console.log('hehe')
        event.preventDefault()
        let object
        if(event.target.select.value === 'avaliable'){
             object = {
                "name": event.target.name.value,
                "carType": event.target.carType.value,
                "model": event.target.model.value,
                "photo": event.target.photo.value,
                "rentCost": `${event.target.rentCost.value}${event.target.price.value}`,
                "carStatus": event.target.carStatus.value,
                "status": event.target.select.value,
                "takenId" : 'null'               
            }
        }else{
            object = {
               "name": event.target.name.value,
               "carType": event.target.carType.value,
               "model": event.target.model.value,
               "photo": event.target.photo.value,
               "rentCost": `${event.target.rentCost.value}${event.target.price.value}`,
               "carStatus": event.target.carStatus.value,
               "status": event.target.select.value,
               "takenId" : props.selectedCar.takenId
           }
        }
        let config = {
            method: 'put',
            url: `https://book-me401.herokuapp.com/updatecar/${props.selectedCar.id}`,
            headers: {
                'Authorization': `Bearer ${context.token}`,
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
        console.log(props.myCars, 'here is the state');
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
                <Modal.Title>Edit Your Car</Modal.Title>
            </Modal.Header>
            <Modal.Body>
       <form className='motato' onSubmit={handelSubmit}>
<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail" className=''>
        <Form.Label>Car Name</Form.Label>
        <Form.Control defaultValue={props.selectedCar.name} type='text' name='name' />
    </Form.Group>
    <Form.Group as={Col} >
        <Form.Label>Car Type</Form.Label>
        <Form.Control defaultValue={props.selectedCar.carType} type='text' name='carType' />
    </Form.Group>
</Row>
<Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Model</Form.Label>
    <Form.Control defaultValue={props.selectedCar.model} type='text' name='model' />
</Form.Group>
<Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Photo</Form.Label>
    <Form.Control defaultValue={props.selectedCar.photo} type='text' name='photo' />
</Form.Group>
<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Rent Cost</Form.Label>
        <Form.Control defaultValue={parseInt(props.selectedCar.rentCost)} type='number' name='rentCost' />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select name='price' defaultValue="Hour">
         
            <option value='/hour'  >Hour</option>
            <option value='/day'>Day</option>
            <option value='/month' >Month</option>
        </Form.Select>
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Car Status</Form.Label>
        <Form.Control defaultValue={props.selectedCar.carStatus} type='text' name='carStatus' />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Status </Form.Label>
        {props.selectedCar.takenId ==='null'?
        <Form.Select name='select' >
            <option value='avaliable' >Avaliable</option>
            <option value='taken'>Taken</option>
        </Form.Select>:
            <Form.Select name='select'>
            <option value='taken'>Taken</option>
            <option value='avaliable' >Avaliable</option>
        </Form.Select>}
    </Form.Group>
</Row>
<Button variant="primary" type="submit">
    Submit
</Button>
</form>
            </Modal.Body>
        </Modal>
    </div>
    )
}


