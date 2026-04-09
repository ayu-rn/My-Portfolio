import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub } from "react-icons/ai";
import { BsTerminalFill } from "react-icons/bs"; // A sleek terminal icon for projects

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-down">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-down" data-aos-delay="200">
          An in-depth look at my technical projects and engineering process.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* --- PROJECT 1: STUDENT BUDDY --- */}
          <Col md={5} className="project-card" data-aos="fade-up" data-aos-delay="300">
            <Card className="project-card-view" style={{ padding: "20px", height: "100%" }}>
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "20px", textAlign: "left" }}>
                  <BsTerminalFill style={{ color: "#c770f0", marginRight: "10px", marginBottom: "5px" }} />
                  Student-Buddy Chrome Extension
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", paddingBottom: "15px", color: "rgba(255,255,255,0.8)" }}>
                  A browser-based productivity extension designed to centralize and streamline academic task management without relying on external databases.
                  <br /><br />
                  <strong style={{ color: "white" }}>Technical Implementation:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li><strong>Architecture:</strong> Engineered using vanilla HTML, CSS, and JavaScript for maximum browser performance.</li>
                    <li><strong>Data Management:</strong> Integrated standard web APIs and local storage to persistently save user data, study schedules, and task states across sessions.</li>
                    <li><strong>UI/UX:</strong> Designed a responsive, low-latency popup interface featuring interactive to-do lists and study timers.</li>
                  </ul>
                </Card.Text>
                <div style={{ marginTop: "auto" }}>
                  <Button 
                    variant="primary" 
                    href="https://github.com/ayu-rn/Student-Buddy-Chrome-extension" 
                    target="_blank"
                    className="w-100"
                  >
                    <AiFillGithub /> &nbsp; View Source Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* --- PROJECT 2: FACE RECOGNITION --- */}
          <Col md={5} className="project-card" data-aos="fade-up" data-aos-delay="500">
            <Card className="project-card-view" style={{ padding: "20px", height: "100%" }}>
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "20px", textAlign: "left" }}>
                  <BsTerminalFill style={{ color: "#c770f0", marginRight: "10px", marginBottom: "5px" }} />
                  Face-Recognition Attendance System
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", paddingBottom: "15px", color: "rgba(255,255,255,0.8)" }}>
                  A real-time, webcam-based attendance tracking application that automates logging via facial biometric extraction.
                  <br /><br />
                  <strong style={{ color: "white" }}>Technical Implementation:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li><strong>Backend & Routing:</strong> Architected utilizing Flask to serve a responsive, lightweight web interface.</li>
                    <li><strong>Computer Vision:</strong> Integrated OpenCV for live video capture and MediaPipe Face Mesh for extracting precise facial landmarks and embeddings.</li>
                    <li><strong>Data Pipeline:</strong> Engineered an efficient storage system using NumPy for embedding comparison and automated CSV generation for daily logging.</li>
                  </ul>
                </Card.Text>
                <div style={{ marginTop: "auto" }}>
                  <Button 
                    variant="primary" 
                    href="https://github.com/ayu-rn/face-recognition-system" 
                    target="_blank"
                    className="w-100"
                  >
                    <AiFillGithub /> &nbsp; View Source Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;