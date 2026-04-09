import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* Added fade-right to your about text */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            data-aos="fade-right"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/* Added fade-left to the laptop image */}
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            data-aos="fade-left"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        {/* Added fade-up to the skillset heading */}
        <h1 className="project-heading" data-aos="fade-up">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        {/* Added fade-up to the tools heading */}
        <h1 className="project-heading" data-aos="fade-up">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        
      </Container>
    </Container>
  );
}

export default About;


