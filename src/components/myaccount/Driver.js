import React, { useContext,useEffect, useState } from "react";
import { LoginContext } from '../signUp/Auth';
import axios from 'axios'
import io from "socket.io-client";

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
  useEffect(async() => {
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
  return <div>
    {mycars.map(car=>{
      return (<h1>{car.name}</h1>)
    })}
  </div>;
}
export default Driver;