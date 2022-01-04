import React, { useContext } from "react";
import { LoginContext } from '../signUp/Auth';
import axios from 'axios'

export default function Signupform() {
    const context = useContext(LoginContext);
    async function handelSubmit(event) {
        event.preventDefault()
        const obj = {
            "username": event.target.userName.value,
            "password": event.target.password.value,
            "phone": event.target.phone.value,
            "Adress": event.target.adress.value,
            "role": event.target.select.value,
        }
       await axios.post('https://book-me401.herokuapp.com/signUp', obj)

       context.login(event.target.userName.value, event.target.password.value)

    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label>User Name</label>
                <input placeholder='user name' type='text' name='userName' required />
                <label>Pasword</label>
                <input placeholder='Pasword' type='password' name='password' required />
                <label>Phone</label>
                <input placeholder='model' type='text' name='phone' required />
                <label>Adress</label>
                <input placeholder='Adress' type='text' name='adress' required />
                <select name='select' required >
                    <option value='customer' >Customer</option>
                    <option value='owner' >Owner</option>
                    <option value='driver'>Driver</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
