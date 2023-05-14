import { useParams } from "react-router-dom";
import "./styles/ItemCard.css";
import catalogue from "../shopping";
import ProductCounter from "./ProductCounter";

export default function ItemCard({ addItem, cart, changeItemCount }) {
  const params = useParams();
  const item = catalogue[params.id];

  let cartManipulator = (
    <button className="item-btn" onClick={addToCart}>
      Add to cart
    </button>
  );

  const index = cart.findIndex((iterItem) => iterItem.id === item.id);
  if (index >= 0) {
    cartManipulator = (
      <ProductCounter item={cart[index]} changeItemCount={changeItemCount} />
    );
  }

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
        {cartManipulator}
      </div>
      <img className="item-card-image" src={item.image} alt={item.name} />
    </div>
  );
}
