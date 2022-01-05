import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './css/Whoare.css'
export default function Whoare() {
    return (
        <>
            <div className='maine'>
                <Row>
                    <Col><Row><h1 className='tet'>Vision </h1></Row> <Row> <div className='meme'>We will be a growth-oriented car rental company by efficiently serving value-conscious customers for all of their car rental occasions.</div>

                    </Row></Col>
                    <Col><Row><h1 className='tet'>Mission </h1></Row> <Row> <div className='meme'>We will consistently deliver a quality product, friendly service and great value that make customers confident that Budget is their best car rental choice.</div>

                    </Row></Col>
                </Row>
            </div>
        </>
    )
}
