import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Header from "./Margins/Header";
import Footer from "./Margins/Footer";
import { useState } from "react";
import ItemCard from "./Shop/ItemCard";
import Checkout from "./Cart/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  function addItem(newItem) {
    const index = cart.findIndex((item) => item.id === newItem.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].count += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { id: newItem.id, count: 1 }]);
    }
  }

  function removeItem(deleteItem) {
    setCart(cart.filter((item) => item.id !== deleteItem.id));
  }

  function changeItemCount(changeItem, count) {
    if (count < 1) {
      removeItem(changeItem);
    } else {
      const index = cart.findIndex((item) => item.id === changeItem.id);
      const newCart = [...cart];
      newCart[index].count = count;
      setCart(newCart);
    }
  }

  function clearCart() {
    setCart([]);
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
        <Route path="/cart">
          <Route
            index
            element={
              <Cart
                cart={cart}
                changeItemCount={changeItemCount}
                clearCart={clearCart}
              />
            }
          ></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
