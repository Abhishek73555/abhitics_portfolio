import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // const handleHireMeClick = () => {
  //   window.location.href = 'https://www.linkedin.com/in/abhishek-tiwari-8b5598315';
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo" src="/images/logo1.jpg" alt="logo-image" />
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {/* <button className="navbar-button" onClick={handleHireMeClick} >Hire Me</button> */}
        <button className="navbar-button" onClick={() => window.open("/Abhitics_Resume.pdf", "_blank")}>Resume</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
