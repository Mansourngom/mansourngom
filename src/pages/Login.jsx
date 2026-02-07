import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connexion directe sans vérification
    setIsLoggedIn(true);

    if (remember) {
      localStorage.setItem("isLoggedIn", "true");
    }

    navigate("/"); // Redirection vers Dashboard
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#2f3337", // fond sombre comme image 2
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "5px", color: "#ffffff", letterSpacing: "1px" }}>
        RED PRODUCT
      </h1>
      <p style={{ marginBottom: "30px", color: "#cccccc" }}>
        Connectez-vous en tant qu'Admin
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "350px",
          padding: "30px",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          style={{
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            outline: "none",
          }}
        />

        <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Garder moi connecté
        </label>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#333333", // bouton sombre comme image
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Se connecter
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "14px",
            marginTop: "10px",
            gap: "5px",
          }}
        >
          <a href="#" style={{ color: "#f1c40f", textDecoration: "none" }}>
            Mot de passe oublié ?
          </a>
          <span style={{ color: "#555" }}>
            Vous n'avez pas de compte ?{" "}
            <a href="#" style={{ color: "#f1c40f", textDecoration: "none" }}>
              S'inscrire
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
