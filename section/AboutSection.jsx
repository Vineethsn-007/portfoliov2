"use client"; // add this if you use hooks later in this component

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

export default function AboutSection() {
  return (
    <div className="about-section">
      <h1 className="about-title">My Learning Journey</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#330066", color: "#fff", borderRadius: "20px" }}
          contentArrowStyle={{ borderRight: "7px solid  #330066" }}
          date="2023-24"
          iconStyle={{ background: "#330066", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="journey-title vertical-timeline-element-title">Web Development</h3>
          <h4 className="journey-subtitle vertical-timeline-element-subtitle">
            Learnt HTML, CSS and JavaScript
          </h4>
          <p>
            Started my coding journey through web development. Learning HTML,
            CSS, and JavaScript gave me confidence to move into advanced
            frameworks and explore areas like React, Firebase, and IoT
            integration. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#A53860", color: "#fff", borderRadius: "20px" }}
          contentArrowStyle={{ borderRight: "7px solid  #A53860" }}
          date="2024-25"
          iconStyle={{ background: "#A53860", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="journey-title vertical-timeline-element-title">React.js</h3>
          <h4 className="journey-subtitle vertical-timeline-element-subtitle">
            Frontend Development
          </h4>
          <p>
          Explored component-based development with React, building dynamic 
  UIs and real-world projects like my portfolio and many other real time projects. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F14A00", color: "#fff", borderRadius: "20px" }}
          contentArrowStyle={{ borderRight: "7px solid  #F14A00" }}
          date="2024-25"
          iconStyle={{ background: "#F14A00", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="journey-title vertical-timeline-element-title">Internet of Things</h3>
          <h4 className="journey-subtitle vertical-timeline-element-subtitle">
          Hardware + Software Integration
          </h4>
          <p>
          Dived into IoT using NodeMCU, sensors, and actuators. Built projects 
  like a smart glove for paralyzed people and a health monitoring system, 
  combining IoT with machine learning for real-world impact.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#005B41", color: "#fff", borderRadius: "20px" }}
          contentArrowStyle={{ borderRight: "7px solid  #005B41" }}
          date="2025-current"
          iconStyle={{ background: "#005B41", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="journey-title vertical-timeline-element-title">Blockchain Development</h3>
          <h4 className="journey-subtitle vertical-timeline-element-subtitle">
          Solidity, Smart Contracts
          </h4>
          <p>
          Currently learning blockchain concepts and smart contract 
  development using Solidity. Exploring tools like Remix IDE 
  and Ganache to build and test decentralized applications (DApps), 
  while understanding how blockchain integrates with IoT and cybersecurity.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
