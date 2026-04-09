import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineLink } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs"; // The new sleek checkmark icon!

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-down">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-down" data-aos-delay="200">
          A detailed look at my continuous learning and specialized training.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* --- DSA CERTIFICATE --- */}
          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay="300">
            <Card className="project-card-view" style={{ padding: "20px", height: "100%" }}>
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "20px", textAlign: "left" }}>
                  <BsPatchCheckFill style={{ color: "#c770f0", marginRight: "10px", marginBottom: "5px" }} />
                  Data Structures & Algorithm
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", paddingBottom: "15px", color: "rgba(255,255,255,0.8)" }}>
                  Completed a rigorous training program focused on core computer science concepts, memory optimization, and algorithmic efficiency.
                  <br /><br />
                  <strong style={{ color: "white" }}>Key Competencies Acquired:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li>Mastery of foundational structures (Arrays, Linked Lists, Trees, Graphs, Hash Maps).</li>
                    <li>Proficiency in algorithmic paradigms including Dynamic Programming and Greedy Algorithms.</li>
                    <li>Enhanced problem-solving capabilities utilizing Big O notation to analyze time and space complexity.</li>
                  </ul>
                </Card.Text>
                <div style={{ marginTop: "auto" }}>
                  <Button 
                    variant="primary" 
                    href="https://drive.google.com/file/d/1ZZqnlE976eQKScPpsyxb5EKW55Eu-XHC/view?usp=drive_link" 
                    target="_blank"
                    className="w-100"
                  >
                    <AiOutlineLink /> &nbsp; View Official Credential
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* --- MERN CERTIFICATE --- */}
          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay="400">
            <Card className="project-card-view" style={{ padding: "20px", height: "100%" }}>
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "20px", textAlign: "left" }}>
                  <BsPatchCheckFill style={{ color: "#c770f0", marginRight: "10px", marginBottom: "5px" }} />
                  Full MERN Stack Developer
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", paddingBottom: "15px", color: "rgba(255,255,255,0.8)" }}>
                  Certified in architecting, developing, and deploying robust full-stack web applications from the ground up.
                  <br /><br />
                  <strong style={{ color: "white" }}>Key Competencies Acquired:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li><strong>Frontend:</strong> Building responsive, component-based user interfaces utilizing React.js.</li>
                    <li><strong>Backend:</strong> Designing scalable RESTful APIs using Node.js and Express.js frameworks.</li>
                    <li><strong>Database:</strong> Structuring and querying NoSQL databases efficiently with MongoDB.</li>
                  </ul>
                </Card.Text>
                <div style={{ marginTop: "auto" }}>
                  <Button 
                    variant="primary" 
                    href="https://drive.google.com/file/d/1-lPYGicgvOI_sINjKHur-qY9c7QsD71H/view?usp=drive_link" 
                    target="_blank"
                    className="w-100"
                  >
                    <AiOutlineLink /> &nbsp; View Official Credential
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* --- TCS CERTIFICATE --- */}
          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay="500">
            <Card className="project-card-view" style={{ padding: "20px", height: "100%" }}>
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "20px", textAlign: "left" }}>
                  <BsPatchCheckFill style={{ color: "#c770f0", marginRight: "10px", marginBottom: "5px" }} />
                  TCS iON Career Edge Young Professional
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", paddingBottom: "15px", color: "rgba(255,255,255,0.8)" }}>
                  A specialized corporate readiness program designed by Tata Consultancy Services to bridge the gap between academic learning and industry standards.
                  <br /><br />
                  <strong style={{ color: "white" }}>Key Competencies Acquired:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li>Advanced corporate communication and professional email etiquette.</li>
                    <li>Foundational knowledge of Agile methodologies and corporate operational frameworks.</li>
                    <li>Development of crucial soft skills including leadership, teamwork, and effective time management.</li>
                  </ul>
                </Card.Text>
                <div style={{ marginTop: "auto" }}>
                  <Button 
                    variant="primary" 
                    href="https://drive.google.com/file/d/1aXYyZLbdfIR_1U20nTF0iBm9o-aK0EzP/view?usp=drive_link" 
                    target="_blank"
                    className="w-100"
                  >
                    <AiOutlineLink /> &nbsp; View Official Credential
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

export default Certifications;