import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./css/BestOffers.css"
export default function Card(props) {
    return (
        <div>
             <MDBCard className='h-100'>
          <MDBCardImage
            src={props.img}
            alt='Hollywood Sign on The Hill'
            position='top'
            height='300px'          />
          <MDBCardBody>
            <MDBCardTitle>Ford</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard> 
        </div>
    )
}
