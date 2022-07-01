import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
      <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/shudhanshu7324/"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shudhanshu-shree-491b97204/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>

          
        </Col>

        <Col md="4" className="footer-copyright">
          <h3>Developed by Shudhanshu with ❤️. <button style={{background: "none"}}><a href = "mailto: shudhanshu7324.com">Contact Me</a></button></h3>
          
        </Col>
        
        <Col md="4" className="footer-copyright" style={{marginTop:"9px"}}>
          <h3  style={{fontSize:"10px"}}>Copyright © {year} SS</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
