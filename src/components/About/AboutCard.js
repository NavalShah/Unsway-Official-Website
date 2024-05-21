import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">Unswayyy </span>
            from <span className="purple"> India.</span>
            <br />
            More unfilled to do text
            <br />
            Even more unfilled to do (text)
            <br />
            <br />
            Here's what we do
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Activity 1
            </li>
            <li className="about-activity">
              <ImPointRight /> Activity 2
            </li>
            <li className="about-activity">
              <ImPointRight /> Activity 3
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Unsway</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
