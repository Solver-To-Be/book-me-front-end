import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './components/HomePage/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Owner from './components/myaccount/owner/Owner'
import Driver from './components/myaccount/Driver'
import Customer from './components/myaccount/Customer'
import Cars from './components/cars/Cars'
import 'bootstrap/dist/css/bootstrap.min.css';

// marwan customer = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcndhbiIsImlhdCI6MTY0MTIxMTY3N30.CzjZDfZT4C1K1gXC69QGau8PTTa_HGs6_o5_90fOxqY

// khalid driver = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYWxpZCIsImlhdCI6MTY0MTIxMTc0MX0.PjBfhgfkxvEkoF5Obcca92wxVPR_4wt0wVMSSdjZIbQ
const cap = 'owner'
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/myAcount">
              {cap ==='driver' &&  <Driver />}
              {cap === 'owner' && <Owner />}
              {cap === 'customer' && <Customer />}
            </Route>
            <Route exact path="/cars">
              <Cars />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
