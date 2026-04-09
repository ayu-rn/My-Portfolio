import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Ayush_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        
        {/* --- Premium Header & Download Button --- */}
        <Row className="justify-content-center" data-aos="fade-down">
          <Col md={8} className="text-center">
            <h1 className="project-heading" style={{ fontSize: "3em", marginBottom: "20px" }}>
              My <strong className="purple">Journey</strong>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "40px", fontSize: "1.2em" }}>
              A timeline of my academic and technical evolution.
            </p>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{
                padding: "12px 30px",
                fontSize: "1.1em",
                borderRadius: "30px",
                boxShadow: "0 10px 20px -10px rgba(199, 112, 240, 0.6)",
                transition: "all 0.3s ease-in-out"
              }}
              className="download-btn-premium"
            >
              <AiOutlineDownload style={{ fontSize: "1.4em", marginRight: "8px" }} />
              Download Full PDF
            </Button>
          </Col>
        </Row>

        {/* --- Sleek Timeline Layout --- */}
        <Row className="mt-5 pt-5" style={{ justifyContent: "center" }}>
          <Col md={8}>
            
            {/* Timeline Item 1: B.Tech */}
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <h3 className="purple" style={{ fontWeight: "bold" }}>B.Tech in Computer Science and Engineering (AI)</h3>
              <h5 style={{ color: "rgba(255,255,255,0.9)" }}>G.L. Bajaj Institute of Technology & Management</h5>
              <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>Expected 2028 | Greater Noida, U.P.</p>
              <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
                Specializing in Artificial Intelligence with a strong focus on software engineering, 
                full-stack development, and integrating AI tools into practical web applications.
              </p>
            </div>

            <hr style={{ borderColor: "rgba(199, 112, 240, 0.2)", margin: "40px 0" }} />

            {/* Timeline Item 2: High School (12th) */}
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <h3 className="purple" style={{ fontWeight: "bold" }}>Higher Secondary School (CBSE)</h3>
              <h5 style={{ color: "rgba(255,255,255,0.9)" }}>Lucknow Public School</h5>
              <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>2023 | Sitapur, U.P.</p>
              <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
                Graduated with an 88% overall score. Built a foundational passion for computer science, 
                problem-solving, and analytical thinking.
              </p>
            </div>

            <hr style={{ borderColor: "rgba(199, 112, 240, 0.2)", margin: "40px 0" }} />

            {/* Timeline Item 3: High School (10th) */}
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <h3 className="purple" style={{ fontWeight: "bold" }}>High School (CBSE)</h3>
              <h5 style={{ color: "rgba(255,255,255,0.9)" }}>Lucknow Public School</h5>
              <p style={{ color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>2021 | Sitapur, U.P.</p>
              <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
                Graduated with a 94% overall score, demonstrating consistent academic excellence and discipline.
              </p>
            </div>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default ResumeNew;