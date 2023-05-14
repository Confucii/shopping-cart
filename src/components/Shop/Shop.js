import { useState } from "react";
import Catalogue from "./Catalogue";
import Filter from "./Filter";
import "./styles/Shop.css";

export default function Shop({ addItem }) {
  const [filter, setFilter] = useState("");

  return (
    <div className="Shop">
      <Filter setFilter={setFilter} />
      <Catalogue addItem={addItem} filter={filter} />
    </div>
  );
}
