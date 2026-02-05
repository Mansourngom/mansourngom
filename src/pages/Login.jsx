import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true); // marque l'utilisateur comme connecté
      // Optionnel : stocker dans localStorage si "Garder moi connecté"
      if (remember) localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // redirige vers Dashboard
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Titre principal */}
      <h1 style={{ marginBottom: "5px", color: "#4caf50" }}>RED PRODUCT</h1>
      <p style={{ marginBottom: "30px", color: "#555" }}>
        Connectez-vous en tant qu'Admin
      </p>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "350px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Checkbox Garder moi connecté */}
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Garder moi connecté
        </label>

        {/* Bouton Se connecter */}
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Se connecter
        </button>

        {/* Liens et infos supplémentaires */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          <a href="#" style={{ color: "#4caf50", textDecoration: "none" }}>
            Mot de passe oublié ?
          </a>
          <span>
            Vous n'avez pas de compte ? <a href="#" style={{ color: "#4caf50" }}>S'inscrire</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
