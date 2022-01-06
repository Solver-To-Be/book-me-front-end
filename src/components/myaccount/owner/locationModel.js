import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function LocationModel(props) {


    return (
        <>
            <Modal
                show={props.show}
                onHide={() => { props.setShow(!props.show); props.handleClick() }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{
                        width: "100%",
                        height: "auto"
                    }} src={props.location} alt='location not found' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { props.setShow(!props.show); props.handleClick() }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
