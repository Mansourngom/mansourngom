import { Link } from "react-router-dom";
import { FaTachometerAlt, FaHotel } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Hamburger flottant */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu size={28} color="#000" />
      </div>

      {/* Sidebar complet */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Principal</h2>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <FaTachometerAlt />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/hotels" onClick={() => setIsOpen(false)}>
              <FaHotel />
              Liste des hôtels
            </Link>
          </li>
        </ul>
      </div>

      <style>
        {`
        /* Hamburger flottant */
        .hamburger {
          position: fixed;
          top: 15px;
          left: 15px;
          cursor: pointer;
          z-index: 1100;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .hamburger:hover {
          transform: scale(1.2);
          color: #444; /* légèrement gris foncé au hover */
        }

        /* Sidebar */
        .sidebar {
          position: fixed;
          top: 0;
          left: -220px;
          width: 200px;
          height: 100vh;
          background: #3e3a3a;
          padding: 20px;
          box-shadow: 2px 0 5px rgba(0,0,0,0.3);
          transition: left 0.3s ease;
          z-index: 1000;
          color: #fff;
        }

        .sidebar.open {
          left: 0;
        }

        .sidebar h2 {
          margin-bottom: 20px;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
        }

        .sidebar ul li {
          margin-bottom: 15px;
        }

        .sidebar ul li a {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #fff;
          padding: 10px;
          border-radius: 5px;
          text-decoration: none;
          color: #333;
          font-weight: bold;
        }
        `}
      </style>
    </>
  );
}

export default Sidebar;
