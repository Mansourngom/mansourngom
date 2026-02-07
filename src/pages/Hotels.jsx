import { useState } from "react";
import HotelCard from "../components/HotelCard";

import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";
import hotel5 from "../assets/images/hotel5.jpg";
import hotel6 from "../assets/images/hotel6.jpg";

const hotelsData = [
  { name: "Hôtel Terrou-Bi", address: "Dakar", price: 25000, images: hotel1 },
  { name: "Hôtel Pullman", address: "Plateau", price: 20000, images: hotel2 },
  { name: "Hôtel King Fahd", address: "Almadies", price: 30000, images: hotel3 },
  { name: "Hôtel Radisson", address: "Dakar", price: 22000, images: hotel4 },
  { name: "Hôtel Lamantin", address: "Ngor", price: 18000, images: hotel5 },
  { name: "Hôtel Almadies", address: "Almadies", price: 26000, images: hotel6 },
];

function Hotels() {
  const [hotels, setHotels] = useState(hotelsData);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHotel = {
      name: e.target.name.value,
      address: e.target.address.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      price: Number(e.target.price.value),
      currency: e.target.currency.value,
      images: e.target.image.files[0]
        ? URL.createObjectURL(e.target.image.files[0])
        : hotel1,
    };

    setHotels([newHotel, ...hotels]);
    e.target.reset();
    setShowForm(false);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">🏨 Liste des Hôtels</h1>

      {/* Bouton Premium */}
      <div className="btn-container">
        <button
          className="premium-btn"
          onClick={() => setShowForm(true)}
        >
          <span className="btn-icon">✦</span>
          Créer un nouvel hôtel
        </button>
      </div>

      {/* Liste */}
      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            address={hotel.address}
            price={hotel.price}
            images={hotel.images}
          />
        ))}
      </div>

      {/* Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <form
            className="modal-form"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <h2>Ajouter un hôtel</h2>

            <input type="text" name="name" placeholder="Nom de l'hôtel" required />
            <input type="text" name="address" placeholder="Adresse" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Téléphone" required />
            <input type="number" name="price" placeholder="Prix par nuit" required />
            <input type="text" name="currency" placeholder="Devise (XOF, €...)" required />
            <input type="file" name="image" accept="image/*" />

            <button type="submit" className="submit-btn">
              Enregistrer
            </button>
          </form>
        </div>
      )}

      <style>
        {`
        body {
          margin: 0;
        }

        .page-container {
          padding: 30px;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa, #e4efe9);
        }

        .page-title {
          font-size: 28px;
          font-weight: bold;
        }

        .btn-container {
          display: flex;
          justify-content: flex-end;
          margin: 30px 0;
        }

        .premium-btn {
          padding: 15px 35px;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          background: linear-gradient(270deg, #262b28, #253a30, #7f8e8a, #414c45);
          background-size: 600% 600%;
          animation: gradientMove 6s ease infinite;
          box-shadow: 0 10px 30px rgba(0, 200, 83, 0.4);
          transition: 0.4s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .premium-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 45px rgba(0, 200, 83, 0.6);
        }

        .btn-icon {
          animation: pulse 2s infinite;
        }

        .hotel-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          backdrop-filter: blur(6px);
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .modal-form {
          width: 420px;
          padding: 30px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          animation: slideUp 0.3s ease;
          position: relative;
        }

        .modal-form input {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
        }

        .modal-form input:focus {
          border-color: #00c853;
        }

        .submit-btn {
          padding: 12px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #363e3a, #2e7050);
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:hover {
          transform: scale(1.05);
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: transparent;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        `}
      </style>
    </div>
  );
}

export default Hotels;
