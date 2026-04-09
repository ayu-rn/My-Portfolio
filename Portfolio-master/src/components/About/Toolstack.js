import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows } from "react-icons/fa"; 
import { VscVscode } from "react-icons/vsc"; 
import { SiGithub, SiN8N } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FaWindows />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>Windows</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <VscVscode />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>VS Code</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SiGithub />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>GitHub</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SiN8N />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>n8n</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
