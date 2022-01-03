import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Ownermodal(props) {
    return (
        <div>
            <Modal
                show={props.showCarOwnerModal}
                onHide={() =>  props.setShowCarOwnerModal(!props.showCarOwnerModal)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.carOwner.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <li> Phone : {props.carOwner.phone} </li>
                   <li> Adress : {props.carOwner.Adress} </li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShowCarOwnerModal(!props.showCarOwnerModal)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
