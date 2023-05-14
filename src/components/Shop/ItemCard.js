import { useParams } from "react-router-dom";
import "./styles/ItemCard.css";
import catalogue from "../shopping";

export default function ItemCard({ addItem }) {
  const params = useParams();
  const item = catalogue[params.id];

  function addToCart() {
    addItem(item);
  }

  return (
    <div className="ItemCard">
      <div className="item-card-description">
        <p>Model name: {item.name}</p>
        <p>Color: {item.type.slice(0, 1).toUpperCase() + item.type.slice(1)}</p>
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
        <button className="item-card-btn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
      <img className="item-card-image" src={item.image} alt={item.name} />
    </div>
  );
}
