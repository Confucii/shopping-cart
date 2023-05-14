import { useNavigate } from "react-router-dom";
import "./styles/Item.css";

export default function Item({ item, addItem }) {
  const navigator = useNavigate();

  function reroute(e) {
    navigator(`${e.currentTarget.dataset.id}`);
  }

  function addToCart(e) {
    addItem(item);
    e.stopPropagation();
  }

  return (
    <div data-id={item.id} className="Item" onClick={reroute}>
      <img className="item-img" src={item.image} alt={item.name} />
      <p>Model: {item.name}</p>
      <p>Price: {item.price} credits</p>
      <button className="item-btn" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}
