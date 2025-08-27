import HeroSection from "@/section/HeroSection";
import React from "react";
import "./globals.css";
import AboutSection from "@/section/AboutSection";

function page() {
  return (
    <div className="main absolute inset-0">
      <HeroSection />
      <AboutSection/>
    </div>
  );
}

export default page;
