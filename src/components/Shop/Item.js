import "./styles/Item.css";

export default function Item({ item }) {
  return (
    <div className="Item">
      <img className="item-img" src={item.image} alt={item.name} />
      <p>Model: {item.name}</p>
    </div>
  );
}
