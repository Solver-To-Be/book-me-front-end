import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import { styled } from '@mui/material/styles';
import './Notefication.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Notefication(props) {
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >

            <a href="#" class="notification" onClick={handleShow} >
                <i class="material-icons" >time_to_leave</i>
                {props.payLoadArr.length != 0 && <span class="badge">{props.payLoadArr.length}</span>}
            </a>
            {/* <Button className='notefication' variant="primary" onClick={handleShow}>
                Launch
            </Button> */}

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Notefication</Offcanvas.Title>
                </Offcanvas.Header>
                {props.payLoadArr.map(payload => {
                    return (
                        <>
                            <Offcanvas.Body >
                             <div className='cvc'>
                              <h3 className='titt'>  There is a customer need a car that has id: {payload.carid} has name {payload.carName} from {payload.startDate} to {payload.endDate} </h3>
                                <br/>

                                <Button variant="primary" onClick={() => props.renResponse(payload, 'ok')}>
                                Accept
                            </Button> {' '}
                            <Button  variant="danger"  onClick={() => props.renResponse(payload, 'refused')}>
                                Refuse
                            </Button>
                            </div>
                            </Offcanvas.Body>
                           
                        </>
                    )
                })
                }
            </Offcanvas>

        </div>
    )
}

{/* <Stack spacing={2} >
                {
                    props.payLoadArr.map(payload => {
                        return (<>
                            <Item>there is a customer need a car that has id:${payload.carid} has name${payload.carName} from ${payload.startDate} to ${payload.endDate}</Item>
                            <button onClick={() => props.renResponse(payload, 'ok')}>Accept</button>
                            <button onClick={() => props.renResponse(payload, 'refused')}>Refuse</button>
                        </>)
                    })
                }
            </Stack> */}