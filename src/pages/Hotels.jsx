import { useState, useEffect } from "react";
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

  // Bloquer scroll arrière-plan
  useEffect(() => {
    if (showForm) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showForm]);

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
      <h1 className="page-title">Liste des Hôtels</h1>

      <div className="btn-container">
        <button className="add-btn" onClick={() => setShowForm(true)}>
          Ajouter un hôtel
        </button>
      </div>

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

            <h2 className="form-title">Créer un nouvel hôtel</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>Nom de l'hôtel</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Adresse</label>
                <input type="text" name="address" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Téléphone</label>
                <input type="tel" name="phone" required />
              </div>

              <div className="form-group">
                <label>Prix par nuit</label>
                <input type="number" name="price" required />
              </div>

              <div className="form-group">
                <label>Devise</label>
                <select name="currency" required>
                  <option value="XOF">XOF</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

            <label className="image-upload">
              <input type="file" name="image" accept="image/*" hidden />
              <div className="image-box">
                📷 Cliquer pour ajouter une image
              </div>
            </label>

            <button type="submit" className="submit-btn">
              Enregistrer l'hôtel
            </button>
          </form>
        </div>
      )}

      <style>{`
        body.modal-open {
          overflow: hidden;
        }

        .page-container {
          padding: 30px;
          min-height: 100vh;
          background: #f4f6f9;
          font-family: 'Segoe UI', sans-serif;
        }

        .page-title {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #1f2937;
        }

        .btn-container {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 25px;
        }

        .add-btn {
          padding: 12px 22px;
          border: none;
          background: linear-gradient(135deg, #2e7050, #1f4e3a);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .hotel-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        /* PREMIUM OVERLAY */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(17, 24, 39, 0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: overlayFade 0.3s ease forwards;
        }

        @keyframes overlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* PREMIUM MODAL */
        .modal-form {
          width: 750px;
          background: white;
          padding: 35px;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
          animation: modalPop 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes modalPop {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .form-title {
          font-size: 22px;
          font-weight: 600;
          color: #111827;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 500;
          color: #374151;
        }

        .form-group input,
        .form-group select {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          font-size: 14px;
          transition: 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #2e7050;
          box-shadow: 0 0 0 3px rgba(46,112,80,0.15);
        }

        .image-box {
          height: 140px;
          border: 2px dashed #d1d5db;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
          cursor: pointer;
          transition: 0.3s;
        }

        .image-box:hover {
          border-color: #2e7050;
          background: #f0fdf4;
        }

        .submit-btn {
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #2e7050, #1f4e3a);
          color: white;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }

        .close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: #f3f4f6;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .modal-form {
            width: 95%;
            padding: 20px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Hotels;
