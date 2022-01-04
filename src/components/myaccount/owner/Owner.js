import React, { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../../signUp/Auth';
import LocationModel from './locationModel'
import Card from './card'
import Updatecar from './Updatecar'
import io from 'socket.io-client'
import Notefication from './Notefication'
import axios from 'axios'
import '../button.css'
import './Heroacc.css'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'


export default function Owner() {
    const context = useContext(LoginContext);
    const host = "https://book-me401.herokuapp.com";
    const ownerConnection = io.connect(`${host}/owners`);
    const customConnection = io.connect(`${host}/customs`);
    const [payLoadArr, setPayLoadArr] = useState([])
    let comName = context.userName.username;
    useEffect(() => {

        ownerConnection.emit("get-all", comName);
    }, [])
    ownerConnection.on("all", (payload) => {
        if (payload.ownerName === comName) {
            console.log(`there is a customer need a car that has id:${payload.carid} has name : ${payload.carName} from ${payload.startDate} to ${payload.endDate}`);
        }

        setPayLoadArr([...payLoadArr, payload])
        console.log(payLoadArr);
    });
    ownerConnection.on("rent-req", (payload) => {
        console.log(payload, '==========================');
        if (payload.ownerName === comName) {
            console.log(
                `there is a customer need a car that has id:${payload.carid} has name${payload.carName} from ${payload.startDate} to ${payload.endDate} `
            );
            setPayLoadArr([...payLoadArr, payload])
        }
    });

    function renResponse(payload, string) {
        console.log("response  the rent req ");
        if (string === 'ok') {
            const filterPayLoad = payLoadArr.filter(car => car.carid !== payload.carid)
            setPayLoadArr(filterPayLoad)
        }
        let arg = { status: string, carid: payload.carid, name: payload.name, driver: payload.driver };
        customConnection.emit("rental-res", arg);
    }


    // ========================================
    // ========================================
    // ========================================

    const [showEdit, setShowEdit] = useState(false);
    const [selectedCar, setSelectedCar] = useState({});
    const [myCars, setMyCars] = useState([])
    const [showAddCar, setShowAddCar] = useState(false)

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
                'Authorization': `Bearer ${context.token}`
            },
            data: ''
        };
        let res = await axios(config)
        setMyCars(res.data)

    }, [])

    async function handelSubmit(event) {

        event.preventDefault()
        console.log(event.target.value)
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
                'Authorization': `Bearer ${context.token}`
            },
            data: object
        };
        let res = await axios(config)
        setMyCars([...myCars, res.data])
        setShowAddCar(false)
    }
    console.log(myCars, 'after add --------------------');
    return (
        <>
            <div className='heroacc'>
                <h1>Book Me</h1>


                {
                    showAddCar ?
                        <form className='potato' onSubmit={handelSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail" className=''>
                                    <Form.Label>Car Name</Form.Label>
                                    <Form.Control type="Text" placeholder="Car Name" name='name' />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Car Type</Form.Label>
                                    <Form.Control type="Text" placeholder="Car Type" name='carType' />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Model</Form.Label>
                                <Form.Control placeholder="Model" name='model' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Photo</Form.Label>
                                <Form.Control placeholder="Photo URL" name='photo' />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Rent Cost</Form.Label>
                                    <Form.Control placeholder="Rent Cost" name='rentCost' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select name='select' defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option value='/hour' >Hour</option>
                                        <option value='/day'>Day</option>
                                        <option value='/month' >Month</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Car Status</Form.Label>
                                    <Form.Control placeholder="Car Status" name='carStatus' />
                                </Form.Group>
                            </Row>



                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form> : <>  <h3>Add , Edit , and Delete your own cars</h3>

                            <h2>Let's start 🤩</h2> <button className='button-77' onClick={() => setShowAddCar(true)}>Add New Car</button></>

                }
            </div>
            <div style={{ marginTop: '60px' }}>

                <section>
                    <Row>
                        {myCars.map((car, idx) => {
                            return (
                                <Col md={4} key={idx}>

                                    <Card key={idx}
                                        handleShow={handleClick}
                                        car={car}
                                        handelShowEdit={handelShowEdit}
                                        myCars={myCars}
                                        setMyCars={setMyCars}

                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </section>
                <LocationModel
                    show={show}
                    handleClick={handleClick}
                    setShow={setShow}
                    location={location}
                />
                <Updatecar
                    selectedCar={selectedCar}
                    setShowEdit={setShowEdit}
                    showEdit={showEdit}
                    setMyCars={setMyCars}
                    myCars={myCars} />
                <Notefication
                    payLoadArr={payLoadArr}
                    setPayLoadArr={setPayLoadArr}
                    renResponse={renResponse}
                />
            </div>
        </>
    )
}
