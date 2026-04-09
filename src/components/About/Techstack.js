import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5, // Switched to Devicons
  DiCss3,  // Switched to Devicons
} from "react-icons/di";
import { SiFlask, SiMysql, SiBootstrap } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiJava />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>Java</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiPython />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>Python</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CgCPlusPlus />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>C / C++</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiJavascript1 />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>JavaScript</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiHtml5 />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>HTML</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiCss3 />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>CSS</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SiBootstrap />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>Bootstrap</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiNodejs />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>Node.js</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiReact />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>React</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DiMongodb />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>MongoDB</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SiFlask />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>Flask</span>
        </div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SiMysql />
          <span style={{ fontSize: "22px", marginLeft: "15px" }}>MySQL</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;