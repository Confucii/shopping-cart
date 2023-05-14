import "./styles/Catalogue.css";
import catalogue from "../shopping";
import Item from "./Item";

export default function Catalogue({ addItem, filter }) {
  return (
    <div className="Catalogue">
      {catalogue.map((item) => {
        let newItem;
        if (!filter) {
          newItem = <Item item={item} key={item.id} addItem={addItem} />;
        } else if (filter === item.type) {
          newItem = <Item item={item} key={item.id} addItem={addItem} />;
        }
        return newItem;
      })}
    </div>
  );
}
