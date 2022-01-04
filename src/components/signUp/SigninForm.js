import React, { useContext } from 'react';
import { LoginContext } from './Auth';

export default function SigninForm(props) {

    const context = useContext(LoginContext);

    function handelSubmit(event) {
        event.preventDefault()

        context.login(event.target.userName.value, event.target.password.value)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label>User Name</label>
                <input placeholder='user name' type='text' name='userName' required />
                <label>Pasword</label>
                <input placeholder='Pasword' type='password' name='password' required />                
            <button type='submit'>Sign in</button>
            </form>
            <button onClick={()=>props.setShowSignUp(true)}>Sign Up</button>
        </div>
    )
}
