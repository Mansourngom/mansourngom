import { Link } from "react-router-dom";
import { FaTachometerAlt, FaHotel } from "react-icons/fa";

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
      <h2 style={{ color: "#ffffff", marginBottom: "20px" }}>
        Principal
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#ffffff",
              padding: "10px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            <FaTachometerAlt />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/hotels"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#ffffff",
              padding: "10px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            <FaHotel />
            Liste des hotels
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
