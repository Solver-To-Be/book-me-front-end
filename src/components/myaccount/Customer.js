import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from '../signUp/Auth';
import axios from "axios";
import io from "socket.io-client";
import Card from './Customercard'
import { Row, Col } from "react-bootstrap";
import './heromero.css'
function Customer(props) {
    const context = useContext(LoginContext);
    const host = "https://book-me401.herokuapp.com";
    const customConnection = io.connect(`${host}/customs`);
    let marwan = context.userName.username;
    const [carData, setCarData] = useState([]);
    const [call, setcall] = useState(0);
    useEffect(async () => {
        let object = {};
        let config = {
            method: "get",
            url: `https://book-me401.herokuapp.com/getcustomercar`,
            headers: {
                Authorization: `Bearer ${context.token}`,
                "Content-Type": "application/json",
            },
            data: object,
        };
        const res = await axios(config);
        setCarData(res.data);
        console.log(res.data);
    }, [call]);
    customConnection.on("res", (payload) => {
        console.log(payload);
        if (marwan === payload.name && payload.status === "refused") {
            console.log("your rental request has been rejected");
        }
        if (marwan === payload.name && payload.status === "ok") {
            setcall(call + 1);
            console.log("Your rental request has been accepted");
            if (payload.driver === 'yes') {
                console.log("you have a driver");
            }
        }
    });
    return <div>
        <div className="heromero">My Account</div>
        <div className="dodo">
           <div className="pepeimo"> <img className="pepe" src="https://ca.slack-edge.com/TNGRRLUMA-U023D774KNE-fa9171ed4672-512" alt=""></img></div>
            <div className="nemo">
                <h1>Client Name : {context.userName.username}</h1>
                <h2>Client Role : {context.role}</h2>
            </div>

        </div>

        <section>
            <Row>
                {carData.map((car, idx) => {
                    return (
                        <Col md={4} key={idx}>

                            <Card key={idx}
                                car={car}
                            />
                        </Col>
                    )
                })}
            </Row>
        </section>
    </div>;
}
export default Customer;

