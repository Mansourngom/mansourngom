import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // simulation d'envoi email
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Mot de passe oublié</h2>
        <p className="subtitle">
          Entrez votre email pour réinitialiser votre mot de passe
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="auth-form">
            <input type="email" placeholder="Votre email" required />
            <button type="submit">Envoyer le lien</button>
          </form>
        ) : (
          <p className="success">
            ✅ Un lien de réinitialisation a été envoyé à votre email.
          </p>
        )}

        <Link className="back" to="/login">← Retour à la connexion</Link>
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

export default ForgotPassword;
