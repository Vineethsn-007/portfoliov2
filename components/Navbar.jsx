"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h6>VINEETH S N</h6>
      </div>

      {/* Mobile menu button */}
      <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}></span>
      </div>

      <div className={`navitems ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
          Home
          <div className="line"></div>
        </a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
          About
          <div className="line"></div>
        </a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
          Projects
          <div className="line"></div>
        </a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
          Contact
          <div className="line"></div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
