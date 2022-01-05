import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from '../signUp/Auth';
import axios from 'axios'
import io from "socket.io-client";
import Card from './Customercard'
import { Row, Col } from "react-bootstrap";
import './heromero.css'
function Driver(props) {

  const context = useContext(LoginContext);
  const host = "https://book-me401.herokuapp.com";
  const driverConnection = io.connect(`${host}/drivers`);
  const driverName = context.userName.username

  driverConnection.on("trip", (payload) => {
    if (driverName === payload.driver) {
      console.log(
        `you have req to be driver on car id : ${payload.carid} `,
        `\n`,
        `type : ${payload.carrecord.name}(${payload.carrecord.carType}) model ${payload.carrecord.model} `,
        `\n`,
        `the owner is ${payload.userinfo.username} owner phone number : ${payload.userinfo.phone}`
      );
    }
  });
  const [mycars, setMyCars] = useState([])
  useEffect(async () => {
   
    let config = {
      method: 'get',
      url: 'https://book-me401.herokuapp.com/getdrivercar',
      headers: {
        'Authorization': `Bearer ${context.token}`
      },
      data: ''
    };
    let res = await axios(config)
    console.log(res.data);
    setMyCars([res.data])
  }, [])
  console.log(mycars,'mycars');
  console.log(context,'context');
  return <div>

<div className="heromero">My Account</div>
        <div className="dodo">
           <div className="pepeimo"> <img className="pepe" src="https://cdn4.iconfinder.com/data/icons/characters-4/512/1-09-512.png" alt=""></img></div>
            <div className="nemo">
                <h1>Client Name : {context.userName.username}</h1>
                <h2>Client Role : {context.role}</h2>
            </div>

        </div>
   
    <Row>
      {mycars.map((car, idx) => {
        return (
          <Col md={4} key={idx}>

            <Card key={idx}
              car={car}
            />
          </Col>
        )
      })}
    </Row>

  </div>;
}
export default Driver;

