import React, { Component } from "react";
import { LoginContext } from '../signUp/Auth';
import cookie from 'react-cookies';
import './css/Carsu.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import axios from "axios";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default class MultipleItems extends Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      
    };
  };

  componentDidMount = async () => {   
              
      let config = {
        method: 'get',
        url: 'https://book-me401.herokuapp.com/getallcar',
        headers: {
          'Authorization': `Bearer ${this.context.token}`
        },
        data: ''
      };
      let res = await axios(config)
      console.log(res.data)
      const bestOffer = res.data.filter(car => parseInt(car.rentCost.slice(0, car.rentCost.indexOf('/'))) <= 50)
      this.setState({
        data: bestOffer
      })
      console.log(this.state.data)
   
    };
    
  render() {

    return (
      <>
        <div className="besto">Best Offers</div>
        <div className="mesto">      Don't miss the best deals on the best cars
        </div>
        <div className="carsu">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {this.state.data.map(car => {
              return (
                <div className="imm"> <Card card={car} /> </div>

              )
            })}

          </Carousel>;
        </div>
      </>
    );
  }
}