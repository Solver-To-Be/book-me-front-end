import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./css/BestOffers.css"
export default function BestOffers() {
  return (
      <>
      <div className='cards'>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://media.ed.edmunds-media.com/ford/fusion/2014/oem/2014_ford_fusion_sedan_se_fq_oem_1_1600.jpg'
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
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_816,y_658,w_1794,h_1345/w_1568,h_1176,c_fill/auto-client/20075e74baa11653b98b06ffd685b2cd/a0183543.jpg'
            alt='...'
            position='top'
            height='300px'
          />
          <MDBCardBody>
            <MDBCardTitle>BMW</MDBCardTitle>
            <MDBCardText>This is a short card.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-mercedes-benz-a220-4matic-mmp-1-1638557009.jpg'
            alt='...'
            position='top'
            height='300px'
          />
          <MDBCardBody>
            <MDBCardTitle>Mercides</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://besthqwallpapers.com/Uploads/8-7-2018/58693/thumb2-toyota-camry-2019-4k-exterior-front-view.jpg'
            alt='...'
            position='top'
            height='300px'
          />
          <MDBCardBody>
            <MDBCardTitle>Toyota</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://wallpaperaccess.com/full/2368480.jpg'
            alt='...'
            position='top'
            height='300px'
          />
          <MDBCardBody>
            <MDBCardTitle>Kia</MDBCardTitle>
            <MDBCardText>This is a short card.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://wallpapercave.com/wp/wp4231828.jpg'
            alt='...'
            position='top'
            height='300px'
          />
          <MDBCardBody>
            <MDBCardTitle>Hundai</MDBCardTitle>
            <MDBCardText>This is a short card.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </>
  );
}