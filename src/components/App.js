import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop setCart={setCart} />}></Route>
        <Route path="/cart" element={<Cart cart={cart} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
