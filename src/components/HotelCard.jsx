function HotelCard({ name, address, price, images }) {
    return (
        <div className="hotel-card">
            <img src={images} alt={name} className="hotel-image" />
            <div className="hotel-info">
                <p className="hotel-address">{address}</p>
                <h4 className="hotel-name">{name}</h4>
                <p className="hotel-price">{price} XOF par nuit</p>
            </div>
        </div>
    );
}
export default HotelCard;