import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Gupta </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science and Engineering (AI) at G.L. Bajaj Institute of Technology & Management.
            <br />
            I am an aspiring software engineer with a track record of academic excellence and rapid adoption of emerging technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring emerging tech and AI tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading self-help literature
            </li>
            <li className="about-activity">
              <ImPointRight /> Curating music playlists
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to deliver impactful, practical solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;