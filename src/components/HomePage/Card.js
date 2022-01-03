import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./css/BestOffers.css"
export default function Card(props) {
    return (
        <div>
             <MDBCard className='h-100'>
          <MDBCardImage
            src={props.card.photo}
            alt='Hollywood Sign on The Hill'
            position='top'
            height='250px'          />
          <MDBCardBody>
            <MDBCardTitle>{props.card.name}</MDBCardTitle>
            <MDBCardText>
            <h6>{props.card.model}</h6>
             <h3> {props.card.carType}</h3>
           
             
            </MDBCardText>
          </MDBCardBody>
        </MDBCard> 
        </div>
    )
}
