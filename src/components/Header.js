import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import cartLogo from "../images/cart.svg";

export default function Header({ cart }) {
  return (
    <div className="Header">
      <div className="nav-hero">
        <NavLink className="link" to="/" style={{ color: "var(--color-one)" }}>
          Iron Maiden
        </NavLink>
      </div>
      <ul className="nav-list">
        <li className="nav-elem">
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-complement)" : "var(--color-one)",
            })}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-elem">
          <NavLink
            className="link"
            to="/shop"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-complement)" : "var(--color-one)",
            })}
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
                ? "invert(66%) sepia(26%) saturate(985%) hue-rotate(8deg) brightness(99%) contrast(92%)"
                : "invert(98%) sepia(2%) saturate(548%) hue-rotate(174deg) brightness(99%) contrast(97%)",
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
