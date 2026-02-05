import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        width: "200px",
        background: "#3e3a3aff",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2>Principal</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#f7efefff" }}>
            Dashboard
          </Link>
        </li>

        <li style={{ margin: "10px 0" }}>
          <Link to="/hotels" style={{ textDecoration: "none", color: "#faf6f6ff" }}>
            Liste des hotels
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
