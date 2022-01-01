import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function LocationModel(props) {
      

    return (
        <>
            <Modal
                show={props.show}
                onHide={()=>{props.setShow(!props.show);props.handleClick()}}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.location} alt='location not found' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {props.setShow(!props.show);props.handleClick()}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
