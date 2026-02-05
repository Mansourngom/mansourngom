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
    <div style={{ padding: "20px" }}>
      <h1>Liste des hôtels</h1>
      <button
        onClick={() => setShowForm(true)}
        style={{
          margin: "20px 0",
          padding: "10px 20px",
          background: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Créer un nouvel hôtel
      </button>

      <div style={{ display: "flex", gap: "30px" }}>
        {/* Liste des hôtels */}
        <div style={{ flex: 2, display: "flex", flexWrap: "wrap", gap: "15px" }}>
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

        {/* Formulaire à droite */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              flex: 1,
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              backgroundColor: "#fff",
              height: "fit-content",
            }}
          >
            <h2>Ajouter un hôtel</h2>
            <input type="text" name="name" placeholder="Nom de l'hôtel" required />
            <input type="text" name="address" placeholder="Adresse" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Numéro de téléphone" required />
            <input type="number" name="price" placeholder="Prix par nuit" required />
            <input type="text" name="currency" placeholder="Devise (ex: XOF, €)" required />
            <input type="file" name="image" accept="image/*" />
           <button
  type="submit"
  style={{
    padding: "12px 20px",
    background: "linear-gradient(135deg, #4caf50, #66bb6a)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 6px 15px rgba(76, 175, 80, 0.4)",
    transition: "all 0.3s ease",
    transform: "translateY(0)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 12px 25px rgba(76, 175, 80, 0.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 6px 15px rgba(76, 175, 80, 0.4)";
  }}
>
  Enregistrer
</button>

          </form>
        )}
      </div>
    </div>
  );
}

export default Hotels;
