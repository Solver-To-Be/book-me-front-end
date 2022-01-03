import React from "react";
import io from "socket.io-client";
function Driver(props) {
  const host = "https://book-me401.herokuapp.com";
  const driverConnection = io.connect(`${host}/drivers`);
const driverName="khalid"
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
  return <div>
      hello drivers
  </div>;
}
export default Driver;