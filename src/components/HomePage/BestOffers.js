import React from 'react';
import "./css/BestOffers.css"
import { Card, Button, Row, Container, Col } from 'react-bootstrap';

export default function BestOffers() {
  return (
    <>
     
      <div className="best">Articles & Tips</div>
      <div className='artic'>Explore some of the best tips from around the world</div>
      <Container className='cont'>
        <Row>
          <Col><Card className='cert' style={{ width: '22rem',height:'32rem' }}>
            <Card.Img className='certimg' variant="top" src="https://afar-production.imgix.net/uploads/images/afar_post_headers/images/qHFGW5ejnp/original_shutterstock_225268627.jpg?auto=compress,format&fit=crop&crop=top&lossless=true&w=1080&dpr=1" />
            <Card.Body>

              <Card.Text>
                <h5 className='date'> Dec 7, 2020</h5>
                <h3 className='title'>10 Things You Should Do Every Time You Rent a Car</h3>

                Tips and tricks to earn bonus rewards, save money, and insure your rental car on your next road trip ...
              </Card.Text>
              <Button variant="primary" href='https://www.afar.com/magazine/essential-car-rental-tips'>Read More &gt; </Button>
            </Card.Body>
          </Card></Col>
          <Col><Card className='cert' style={{ width: '22rem',height:'32rem' }}>
            <Card.Img className='certimg' variant="top" src="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/cc507bc6-b5c9-e411-8b9f-0050568e420d/630x355.jpg" />
            <Card.Body>
              <Card.Text>
                <h5 className='date'> Jan 12 2019</h5>
                <h3 className='title'>The Definitive Guide to Renting a Car: Tips and tricks to help you save</h3>

                You’re always at risk of getting ripped off when you rent a car abroad. This guide will make sure you don’t get taken for a ride.Are you unsure about rental car excess insurance?
              </Card.Text>
              <Button href='https://www.rentalcover.com/ar/blog/car-rental-guide' variant="primary">Read More &gt;</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card className='cert' style={{ width: '22rem',height:'32rem' }}>
            <Card.Img className='certimg' variant="top" src="https://www.kampalacityguide.com/wp-content/uploads/2021/08/car-rental.jpg" />
            <Card.Body>

              <Card.Text>
                <h5 className='date'> Jun 19, 2017</h5>
                <h3 className='title'>Car Rental Tips Every Traveler Should Know</h3>

                Need wheels on your next trip? Renting a car can give you freedom and flexibility when you’re traveling, and in some parts of the world it’s the only feasible way to get around...
              </Card.Text>
              <Button href='https://www.smartertravel.com/car-rental-tips/' variant="primary">Read More &gt;</Button>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>

    </>


  );
}