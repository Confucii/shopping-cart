import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import cartLogo from "../images/cart.svg";

export default function Header({ cart }) {
  return (
    <div className="Header">
      <div className="nav-hero">
        <NavLink className="link" to="/" style={{ color: "black" }}>
          Iron Maiden
        </NavLink>
      </div>
      <ul className="nav-list">
        <li className="nav-elem">
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-elem">
          <NavLink
            className="link"
            to="/shop"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-cart">
          <NavLink
            className="link"
            to="/cart"
            style={({ isActive }) => ({
              filter: isActive
                ? "invert(11%) sepia(94%) saturate(6842%) hue-rotate(5deg) brightness(94%) contrast(121%)"
                : "none",
            })}
          >
            <img className="header-cart" src={cartLogo} alt="shopping cart" />
          </NavLink>
          <div
            className="number-in-cart"
            style={{ display: cart.length > 0 ? "block" : "none" }}
          >
            <span>{cart.length > 0 ? cart.length : ""}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
