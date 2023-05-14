import "./styles/ProductCounter.css";

export default function ProductCounter({ item, changeItemCount }) {
  function reduceItemCount(e) {
    changeItemCount(item, item.count - 1);
    e.stopPropagation();
  }

  function increaseItemCount(e) {
    changeItemCount(item, item.count + 1);
    e.stopPropagation();
  }

  return (
    <div className="ProductCounter">
      <button className="product-counter-btn" onClick={reduceItemCount}>
        -
      </button>
      <div className="counter">{item.count}</div>
      <button className="product-counter-btn" onClick={increaseItemCount}>
        +
      </button>
    </div>
  );
}
