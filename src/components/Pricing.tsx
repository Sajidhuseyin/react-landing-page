 import "../styles/Pricing.css";

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>

      <div className="pricing-cards">
        <div className="price-card">
          <h3>Basic</h3>
          <h1>$19</h1>
          <p>Perfect for individuals</p>
          <button>Choose Plan</button>
        </div>

        <div className="price-card featured">
          <span className="badge">Most Popular</span>
          <h3>Pro</h3>
          <h1>$49</h1>
          <p>Best for growing businesses</p>
          <button>Choose Plan</button>
        </div>

        <div className="price-card">
          <h3>Enterprise</h3>
          <h1>$99</h1>
          <p>For large organizations</p>
          <button>Choose Plan</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;