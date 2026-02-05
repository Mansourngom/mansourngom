import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Hotels from "./pages/Hotels";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // état connexion

  return (
    <Router>
      <Routes>
        {/* Route login */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Routes protégées */}
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="hotels" element={<Hotels />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Navigate to="/login" /> // redirige si pas connecté
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
