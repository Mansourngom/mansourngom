function StatCard({ title, value, color, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

export default StatCard;
