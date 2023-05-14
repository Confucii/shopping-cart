import "./styles/Catalogue.css";
import catalogue from "../shopping";
import Item from "./Item";

export default function Catalogue({
  addItem,
  filter,
  search,
  cart,
  changeItemCount,
}) {
  let filtered = [...catalogue];

  if (filter) {
    filtered = filtered.filter((item) => filter === item.type);
  }

  if (search) {
    const regex = new RegExp(search, "i");
    filtered = filtered.filter((item) => regex.test(item.name));
  }

  return (
    <div className="Catalogue">
      {filtered.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            addItem={addItem}
            cart={cart}
            changeItemCount={changeItemCount}
          />
        );
      })}
    </div>
  );
}
