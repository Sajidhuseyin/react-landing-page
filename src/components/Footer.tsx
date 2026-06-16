  import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

 import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="social-icons">

        <a
          href="https://facebook.com/sajidhuseyin1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href="https://linkedin.com/in/sajidhuseyin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sajidhuseyin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

      </div>

        <div className="footer-brand">
          <h2>SmartTech</h2>
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

