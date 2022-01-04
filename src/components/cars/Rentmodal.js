import React, {  useContext } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import io from 'socket.io-client'
import { LoginContext } from '../signUp/Auth';


export default function Updatecar(props) {
    const context = useContext(LoginContext);
    const host = "https://book-me401.herokuapp.com";
    const ownersConnection = io.connect(`${host}/owners`);
    
    
    
    async function handelSubmit(event) {
        event.preventDefault()
        const object = {
            "name" : context.userName.username,
            "startDate": event.target.From.value,
            "endDate": event.target.To.value,
            "driver": event.target.select.value,
            "carid": props.rentedCar.id,
        }
        ownersConnection.emit("req-fromCus", object);
        // ownersConnection.disconnect()
        console.log("wait the accepted from the owner");
        props.setShowRentModal(false)
    }

    function handleClose() {
        props.setShowRentModal(false)
    }

    return (
        <div>
            <Modal
                show={props.showRentModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handelSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail" className=''>
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" placeholder="Car Name" name='From' />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" placeholder="Car Type" name='To' />
                            </Form.Group>
                        </Row>



                        <Row className="mb-3">


                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>with/without Driver</Form.Label>
                                <Form.Select name='select' >                                   
                                    <option value='no' >No Driver</option>
                                    <option value='yes'>with Driver</option>
                                </Form.Select>
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



