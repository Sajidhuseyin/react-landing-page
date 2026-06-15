import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stat-card">
        <h2>500+</h2>
        <p>Happy Clients</p>
      </div>

      <div className="stat-card">
        <h2>1200+</h2>
        <p>Projects Completed</p>
      </div>

      <div className="stat-card">
        <h2>98%</h2>
        <p>Client Satisfaction</p>
      </div>

      <div className="stat-card">
        <h2>24/7</h2>
        <p>Support Available</p>
      </div>
    </section>
  );
}

export default Stats;