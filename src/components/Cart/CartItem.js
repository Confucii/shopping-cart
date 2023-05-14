import "./styles/CartItem.css";

export default function CartItem({ item, count, changeItemCount }) {
  function reduceItemCount() {
    changeItemCount(item, count - 1);
  }

  function increaseItemCount() {
    changeItemCount(item, count + 1);
  }

  function inputChange(e) {
    changeItemCount(item, Number(e.currentTarget.value));
  }

  return (
    <div className="CartItem">
      <img className="cart-item-img" src={item.image} alt={item.name} />
      <div className="cart-item-summary">
        <p>Model: {item.name}</p>
        <p>Price: {item.price}</p>
        <div className="cart-count">
          <button className="cart-item-btn" onClick={reduceItemCount}>
            -
          </button>
          <input
            onChange={inputChange}
            type="number"
            name="cart-item-count"
            id="cart-item-count"
            value={count}
          />
          <button className="cart-item-btn" onClick={increaseItemCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
