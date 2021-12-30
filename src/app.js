import React from 'react';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />       
        <Home />
      </div>
    );
  }
}
