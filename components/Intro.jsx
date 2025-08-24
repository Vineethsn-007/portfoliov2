import React from "react";
import RotatingText from "./RotatingText";

function Intro() {
  return (
    <div className="intro">
      <h6>Hello, I'm Vineeth S N</h6>
      <span className="specs">
        <h6>I specialize in </h6>

        <RotatingText
          texts={[
            "CyberSecurity",
            "Internet of Things",
            "Blockchain",
            "Web Development",
          ]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </span>
      <p className="intro-text">
        I’m passionate about building innovative projects in IoT, AI/ML, and Web
        Development. Currently pursuing B.E. in CSE (IoT & Cybersecurity with
        Blockchain). Love solving real-world problems with tech 🚀
      </p>
    </div>
  );
}

export default Intro;
