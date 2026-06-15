 import "../styles/Services.css";
import ServiceCard from "./ServiceCard";

import {
  FaCode,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      description:
        "Beautiful and modern UI designs for your business.",
    },
    {
      icon: <FaCode />,
      title: "Development",
      description:
        "Fast and scalable React applications.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description:
        "Improve visibility and rank higher on search engines.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;