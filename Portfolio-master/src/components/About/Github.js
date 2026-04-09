import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      
      {/* We use a dynamic LeetCode card generator tied to your username (IgAmAOTi90) */}
      <img 
        src="https://leetcard.jacoblin.cool/IgAmAOTi90?theme=dark&font=Syne&ext=activity" 
        alt="Ayush's LeetCode Stats" 
        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
      />
    </Row>
  );
}

export default Github;