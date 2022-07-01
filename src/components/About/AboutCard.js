import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Shudhanshu </span>
            from <span className="purple"> Chandigarh, India.</span>
            <br />I'm a 3rd-year student, pursuing a <span className="purple">Bachelors degree in Computer Science Engineering </span> from <a href="cuchd.in">Chandigarh University</a>.
            <br />
            <footer className="blockquote-footer"><button style={{background: "none" , marginTop: "25px" , marginLeft: "200px"}}><a href = "mailto: shudhanshu7324.com">Contact Me</a></button></footer>
            <br />
            <br />
            Here is the some of my Coding Profile:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <a href="https://leetcode.com/shudhanshushree7324/">Leetcode</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href="https://www.codingninjas.com/codestudio/profile/98611010-623a-485a-907f-f3b90b6863ed">Codestudio</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href="https://github.com/shudhanshu7324/">Github</a>
            </li>
            
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
