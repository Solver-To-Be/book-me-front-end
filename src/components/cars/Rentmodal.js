import React from 'react'
import Modal from 'react-bootstrap/Modal'
import io from 'socket.io-client'



export default function Updatecar(props) {

    // const host = "https://lkom-k.herokuapp.com/";
    // const ownersConnection = io.connect(`${host}/owners`);
    

    async function handelSubmit(event) {
        event.preventDefault()       
        const object = {
            "startDate": event.target.From.value,
            "endDate": event.target.To.value,
            "driver": event.target.select.value,
            "carid": props.rentedCar.id,
            "takenId": 6
        }
        // ownersConnection.emit("req-fromCus", object);
        // console.log("wait the accepted from the owner");
        

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
                        <label>From</label>
                        <input  type='date' name='From' />
                        <label>To</label>
                        <input type='date' name='To' />                
                        
                        <select name='select'  >
                            <option value='no' >No Driver</option>
                            <option value='yes'>with Driver</option>
                        </select>
                        <button type='submit'>Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
