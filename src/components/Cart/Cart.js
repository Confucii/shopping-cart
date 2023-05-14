import CartItem from "./CartItem";
import "./styles/Cart.css";
import catalogue from "../shopping";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, changeItemCount, clearCart }) {
  let cartRender;
  const navigator = useNavigate();

  function checkout() {
    clearCart();
    navigator("checkout");
  }

  if (cart.length > 0) {
    let cartItems = cart.map((item) => (
      <CartItem
        key={item.id}
        item={catalogue[item.id]}
        count={item.count}
        changeItemCount={changeItemCount}
      />
    ));
    let sum = cart.reduce(
      (sum, item) => sum + catalogue[item.id].price * item.count,
      0
    );
    cartRender = (
      <div className="checkout-window">
        <div className="items">{cartItems}</div>
        <p>Sum: {sum}</p>
        <button className="checkout-btn" onClick={checkout}>
          Checkout
        </button>
      </div>
    );
  } else {
    cartRender = (
      <div className="checkout-window">
        <p className="empty-cart">Cart is empty!</p>
      </div>
    );
  }

  return <div className="Cart">{cartRender}</div>;
}
