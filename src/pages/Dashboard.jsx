import StatCard from "../components/StatCard";
import {
  AiOutlineFile,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineDatabase
} from "react-icons/ai";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="stats">
        <StatCard title="Formulaires" value="125" color="#9c27b0" icon={<AiOutlineFile />} />
        <StatCard title="Messages" value="40" color="#4caf50" icon={<AiOutlineMessage />} />
        <StatCard title="Emails" value="25" color="#f44336" icon={<AiOutlineMail />} />
        <StatCard title="Hôtels" value="40" color="#9c27b0" icon={<AiOutlineHome />} />
        <StatCard title="Utilisateurs" value="600" color="#ff9800" icon={<AiOutlineUser />} />
        <StatCard title="Entités" value="02" color="#2196f3" icon={<AiOutlineDatabase />} />
      </div>

      <style>
        {`
        .dashboard-container {
          padding: 20px;
        }

        /* ✅ 3 EN HAUT / 3 EN BAS */
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        /* Tablette */
        @media (max-width: 900px) {
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .stats {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>
    </div>
  );
}

export default Dashboard;

