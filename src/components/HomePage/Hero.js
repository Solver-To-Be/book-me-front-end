import React from "react";
import { Button } from "react-bootstrap";
import "./css/Hero.css"
export default function Hero() {

    return (
      <>
      <div className="hero" >      

<h1>Book Me</h1>
<h3>Find Best Cars , Prices , and More</h3>
<p>
Browse many cars on our website and choose the most suitable car for you in terms of type, price and the most suitable for your family <br/>

    Book Your Auto Rental
Luxury Cars at low-cost, starts $75 / day
from over 100 premium locations</p>
<h2>What Are You Waiting For !</h2>

<Button className="btbt" variant="primary" size="lg" active>
    Book Now
  </Button>{' '}


    </div>    
    </>
    )
}
