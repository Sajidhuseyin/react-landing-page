 import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="hero-left">
          <h1>
            Launch Your Business
            <br />
            With a Modern Website
          </h1>

          <p>
            Modern responsive landing pages designed
            for startups and businesses.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
            alt="Hero"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;