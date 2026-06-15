 import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">SmartTech</div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#pricing">Pricing</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="nav-btn">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;