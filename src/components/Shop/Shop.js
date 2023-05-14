import { useState } from "react";
import Catalogue from "./Catalogue";
import Filter from "./Filter";
import "./styles/Shop.css";

export default function Shop({ addItem, cart, changeItemCount }) {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="Shop">
      <Filter setFilter={setFilter} search={search} setSearch={setSearch} />
      <Catalogue
        addItem={addItem}
        filter={filter}
        search={search}
        cart={cart}
        changeItemCount={changeItemCount}
      />
    </div>
  );
}
