import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Digital Architect",
          "AI Integrator",
          "Creative Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 80, // Slowed down slightly for elegance
      }}
    />
  );
}

export default Type;