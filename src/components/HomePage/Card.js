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
            <MDBCardTitle>  <p className='cartit'> {props.card.name} - {props.card.carType} </p></MDBCardTitle>
            <MDBCardText>
            <h6 className='model'>Car Model : {props.card.model}</h6>
             <h5 className='price'> Cost : {props.card.rentCost} <br/> <br/> {props.card.status}</h5>
           
             
            </MDBCardText>
          </MDBCardBody>
        </MDBCard> 
        </div>
    )
}
