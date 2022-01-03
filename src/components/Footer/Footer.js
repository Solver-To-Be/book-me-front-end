import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagramSquare,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col className="col">
            <h3>Contact Us</h3>
            <div id="colOneDiv">
                
                  <FaFacebook className="icons" />
             
           
                  <FaInstagramSquare className="icons" />
                
              
               
                  <a href='https://github.com/Solver-To-Be'><FaGithub className="icons"/></a>
              
               
                  <FaWhatsapp className="icons" />
             
            </div>
          </Col>
          <Col className="col">
            <h3>About Us</h3>
            <p>An online car rental company, which started its work in 2020, aspires to serve in many regions very soon</p>
          </Col>
        
          
        </Row>
        <div id="copyRightDiv">
          <p id="copyRight">All Right Reserved 2021 &copy; Solver To Be</p>
        </div>
      </footer>
    );
  }
}

export default Footer;