import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <h6>VINEETH S N</h6>
      </div>
      <div className="navitems">
        <a href="#home">Home
          <div className="line"></div>
        </a>
        <a href="#about">About
        <div className="line"></div>
        </a>
        <a href="#projects">Projects
        <div className="line"></div>
        </a>
        <a href="#contact">Contact
        <div className="line"></div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
