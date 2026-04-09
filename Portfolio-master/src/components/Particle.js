import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: { value: 60, density: { enable: true, value_area: 1500 } },
          color: { value: "#c770f0" }, // The template's signature purple
          links: {
            enable: true,
            color: "#c770f0",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          size: { value: 3, random: true },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" }, // Grabs particles when you hover
            onclick: { enable: true, mode: "push" }, // Adds more particles on click
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;