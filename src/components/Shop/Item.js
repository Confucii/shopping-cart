import { useNavigate } from "react-router-dom";
import "./styles/Item.css";
import ProductCounter from "./ProductCounter";

export default function Item({ item, addItem, cart, changeItemCount }) {
  const navigator = useNavigate();
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
      {cartManipulator}
    </div>
  );
}
