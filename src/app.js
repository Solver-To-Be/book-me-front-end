import React from 'react';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Owner from './components/myaccount/owner/Owner'
import Cars from './components/cars/Cars'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/myAcount">
              <Owner />
            </Route>
            <Route exact path="/cars">
              <Cars />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
