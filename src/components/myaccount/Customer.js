import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from '../signUp/Auth';
import axios from "axios";
import io from "socket.io-client";


function Customer(props) {
    const context = useContext(LoginContext);
    const host = "https://book-me401.herokuapp.com";
    const customConnection = io.connect(`${host}/customs`);
    const driverConnection = io.connect(`${host}/drivers`);
    let marwan = context.userName;
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
        if (marwan === payload.name && payload.status === "refused") {
            console.log("your rental request has been rejected");
        }
        if (marwan === payload.name && payload.status === "ok") {
            setcall(call + 1);
            console.log("Your rental request has been accepted");
            if (payload.driver === 'yes') {
                driverConnection.emit('req-driver', payload)
                console.log("you have a driver");
            }
        }
    });
    return <div><section>
        {carData.map((car, idx) => {
            return (<>
                <h2>{car.name}</h2>
                <h2>{car.id}</h2>
            </>
            )
        })}
    </section></div>;
}
export default Customer;