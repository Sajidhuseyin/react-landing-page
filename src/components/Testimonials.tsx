import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Clients Say</h2>

      <div className="testimonial-cards">

        <div className="testimonial-card">
          <h3></h3>
          <p>CEO</p>

          <p>
            Excellent service and professional
            development process. Highly recommended.
          </p>
        </div>

        <div className="testimonial-card">
          <h3>Ali Khan</h3>
          <p>Designer</p>

          <p>
            The website exceeded our expectations
            and helped improve our online presence.
          </p>
        </div>

        <div className="testimonial-card">
          <h3>Ahmed Raza</h3>
          <p>Business Owner</p>

          <p>
            Great communication, modern design,
            and timely project delivery.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;