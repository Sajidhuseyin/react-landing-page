type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="card">
      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;