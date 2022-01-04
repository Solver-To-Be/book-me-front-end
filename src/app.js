import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Owner from './components/myaccount/owner/Owner';
import Driver from './components/myaccount/Driver';
import Customer from './components/myaccount/Customer';
import Cars from './components/cars/Cars';
import Signup from './components/signUp/Signup';
import { LoginContext } from './components/signUp/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/HomePage/LoginPage';

// const cap = 'owner'
// const isAuth = false
export default class App extends React.Component {

  static contextType = LoginContext;


  render() {
    return (
      <div>
        {  this.context.loggedIn &&  <Header /> }
        <BrowserRouter>
          <Switch>
            <Route exact path="/myAcount">
              {this.context.role === 'driver' && this.context.userName && <Driver />}
              {this.context.role === 'owner'&& this.context.userName && <Owner />}
              {this.context.role === 'customer' &&  this.context.userName && <Customer />}
            </Route>
            <Route exact path="/cars">
              <Cars />
            </Route>
            <Route exact path="/">
              { this.context.loggedIn && this.context.token ? <Home /> : <Signup /> }
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </BrowserRouter>
        { this.context.loggedIn && <Footer /> }
      </div>
    );
  }
}
