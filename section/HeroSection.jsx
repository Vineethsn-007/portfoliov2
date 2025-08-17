import Navbar from "@/components/Navbar";
import React from "react";
import Silk from "@/components/Silk";
import Intro from "@/components/Intro";
import TerminalDemo from "@/components/TerminalDemo";

function HeroSection() {
  return (
    <>
      <Silk
        speed={7}
        scale={1}
        color="#5227FF"
        noiseIntensity={1.5}
        rotation={0}
      />

      <div className="hero-section">
        <Navbar />
        <div className="hero-content">
          <div className="item">
            <Intro />
          </div>
          <div className="item">
            <TerminalDemo/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
