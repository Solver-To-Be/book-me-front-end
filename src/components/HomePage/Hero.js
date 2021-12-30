import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function Hero() {
    let res = ['https://images.wallpaperscraft.com/image/single/mercedesbenz_mercedes_car_144181_1920x1080.jpg', 'https://wallpapercave.com/wp/wp1932414.jpg','https://images.wallpaperscraft.com/image/single/tesla_model_s_tesla_car_142847_1920x1080.jpg']

    return (
      <div className="hero" >      
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={res[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={res[1]}
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={res[2]}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    </div>    

    )
}
