import React, { Component } from "react";
// import { Carousel} from "react-bootstrap";
import './css/Carsu.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
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
            <div className="imm"> <Card img={"https://pv-magazine-usa.com/wp-content/uploads/sites/2/2019/10/FordEV-1200x800.jpeg"} /> </div>
            <div className="imm"> <Card img={"https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/10/Buy-a-Kia-Telluride-Instead-gear-patrol-slide-1.jpg?crop=0.620xw:0.919xh;0.293xw,0.0813xh&resize=640:*"} /> </div>
            <div className="imm" > <Card img={"https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_294,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/5ff85b1a7bbe5518e0f5e0f75adb4769/new_2.jpg"} /> </div>
            <div className="imm"> <Card img={"https://lh3.googleusercontent.com/proxy/vMls8Ecar4UNinRaEmwkt_gn7m4_3xChzAnNGYo4b7nDaC39QUe-8KXQcvanGblvevrTw5irCH99UipmSRG9SCmZh1yuntmNOhNFKJVaqhzDgGuE7p2PyUkaSNP_5yS2RKOpJ72Bvs9ee6QRLQ"} /> </div>
            <div className="imm"> <Card img={"https://cdn.motor1.com/images/mgl/0oEXk/s1/1x1/infiniti-q-inspiration-concept.webp"} /> </div>
            <div className="imm"> <Card img={"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80"} /> </div>
            <div className="imm" > <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7BXl4V7f1UOproarzIgGjUMh9mvqWsAQcQ&usqp=CAU"} /> </div>
          </Carousel>;
        </div>
      </>
    );
  }
}