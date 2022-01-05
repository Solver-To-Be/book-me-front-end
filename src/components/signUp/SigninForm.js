import React, { useContext } from 'react';
import { LoginContext } from './Auth';
import { Form, Button } from "react-bootstrap";
import '../HomePage/css/Loginpage.css'
export default function SigninForm(props) {

    const context = useContext(LoginContext);

    function handelSubmit(event) {
        event.preventDefault()

        context.login(event.target.userName.value, event.target.password.value)
    }
    return (
        <>

      
        <div className='login'>
          <div className='toto'>
        <div className="articc">
        <h1>Book Me</h1>
<h3>Welcome 🤩</h3>
<p>
Welcome to all our distinguished customers and visitors in our amazing site, we kindly ask you to log in first, or if you do not have an account, please Signup , so that you can have all our wonderful features on the site, whether you are a consumer, owner or driver</p>
<h2>So let's start our journy , hurry up !</h2>
        </div>
           <Form onSubmit={handelSubmit} className="foorm">
               <Form.Group><img src='https://cengage.force.com/resource/1607465003000/loginIcon' width='100px' alt='pic'></img></Form.Group>
               
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="UserName" placeholder="Enter email" name='userName' required />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' required />
    <Form.Text className="text-muted">
      Never share your password with anyone else.
    </Form.Text>
  </Form.Group>
  
  
  <Button variant="primary" type="submit" style={{margin:'0px 50px 0px 0px'}}>
 Login
  </Button>

  <Button onClick={()=>props.setShowSignUp(true)} variant="primary" >
 Sign Up
  </Button>
  
</Form>
</div>
        </div>
        </>
    )
}



