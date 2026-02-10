import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true); // simulation inscription
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Créer un compte</h2>
        <p className="subtitle">Inscription administrateur</p>

        {!registered ? (
          <form onSubmit={handleSubmit} className="auth-form">
            <input type="text" placeholder="Nom complet" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <input type="password" placeholder="Confirmer le mot de passe" required />

            <button type="submit">S'inscrire</button>
          </form>
        ) : (
          <p className="success">
            🎉 Compte créé avec succès. Vous pouvez vous connecter.
          </p>
        )}

        <Link className="back" to="/login">← Déjà un compte ? Connexion</Link>
      </div>

      <style>{authStyle}</style>
    </div>
  );
}

const authStyle = `
.auth-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f2f2f2, #e6e6e6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
}

.auth-card {
  background: white;
  padding: 30px;
  width: 360px;
  border-radius: 10px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  text-align: center;
}

.subtitle {
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.auth-form input {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.auth-form button {
  padding: 12px;
  background: #000;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.success {
  color: green;
  font-size: 14px;
}

.back {
  display: block;
  margin-top: 15px;
  color: #f1c40f;
  text-decoration: none;
}
`;

export default Register;
