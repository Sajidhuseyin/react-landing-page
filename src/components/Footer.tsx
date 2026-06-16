 import {
  FaFacebook,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <h2>LandingPage</h2>

      <p>Email: sajidhuseyin@gmail.com</p>

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
          href="https://github.com/Sajidhuseyin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

      </div>

    </footer>
  );
}

export default Footer;