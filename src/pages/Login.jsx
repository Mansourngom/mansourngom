import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connexion directe (sans validation)
    setIsLoggedIn(true);

    if (remember) {
      localStorage.setItem("isLoggedIn", "true");
    }

    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>RED PRODUCT</h1>
        <p className="subtitle">Connexion administrateur</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" placeholder="Email (optionnel)" />
          <input type="password" placeholder="Mot de passe (optionnel)" />

          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Garder moi connecté
          </label>

          <button type="submit">Connect</button>

          <div className="links">
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
            <span>
              Pas de compte ? <Link to="/register">S'inscrire</Link>
            </span>
          </div>
        </form>
      </div>

      <style>
        {`
        /* PAGE */
        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f2f2f2, #e6e6e6);
          font-family: Arial, sans-serif;
        }

        /* CARD */
        .login-card {
          background: #ffffff;
          padding: 35px;
          width: 360px;
          border-radius: 10px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          text-align: center;
        }

        .login-card h1 {
          margin-bottom: 5px;
          font-size: 22px;
          letter-spacing: 1px;
        }

        .subtitle {
          font-size: 14px;
          color: #777;
          margin-bottom: 25px;
        }

        /* FORM */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .login-form input {
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          outline: none;
        }

        .login-form input:focus {
          border-color: #000;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          justify-content: flex-start;
        }

        /* BUTTON */
        .login-form button {
          margin-top: 10px;
          padding: 12px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-form button:hover {
          background: #222;
        }

        /* LINKS */
        .links {
          margin-top: 15px;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .links a {
          color: #fdf908;
          text-decoration: none;
          font-weight: 500;
        }

        .links a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 480px) {
          .login-card {
            width: 90%;
            padding: 25px;
          }
        }
        `}
      </style>
    </div>
  );
}

export default Login;
