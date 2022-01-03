import React from 'react'
import '../HomePage/css/Card.css'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
export default function Card(props) {
    return (
        <div>
             <MDBCard className='h-100'style={{ width: '22rem',height:'42rem' }}>
          <MDBCardImage
            src={props.card.photo}
            alt='Hollywood Sign on The Hill'
             className='imaage'      />
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
