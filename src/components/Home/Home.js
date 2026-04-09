import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Added fade-right to the text */}
            <Col md={7} className="home-header" data-aos="fade-right">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AYUSH GUPTA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Added fade-left to the image */}
            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-left">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid floating-avatar"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;