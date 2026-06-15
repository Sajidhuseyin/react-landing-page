import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>LandingPage</h2>
          <p>
            Building modern websites that help
            businesses grow online.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <div className="social-icons">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
            </div>
          <h3>Contact</h3>
          <p>sajidhuseyin@gmail.com</p>
          <p>+923059564916</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SmartTech. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;