import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Header from "./Margins/Header";
import Footer from "./Margins/Footer";
import { useState } from "react";
import ItemCard from "./Shop/ItemCard";

function App() {
  const [cart, setCart] = useState([]);

  function addItem(newItem) {
    const index = cart.findIndex((item) => item.id === newItem.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].count += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...newItem, count: 1 }]);
    }
  }

  return (
    <div className="App">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop">
          <Route index element={<Shop addItem={addItem} />}></Route>
          <Route path=":id" element={<ItemCard addItem={addItem} />}></Route>
        </Route>
        <Route path="/cart" element={<Cart cart={cart} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
