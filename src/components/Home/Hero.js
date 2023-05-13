import city from "./images/city.jpeg";
import "./styles/Hero.css";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="hero-holder">
        <div className="hero-text">
          Unleash your potential with our power armor - unyielding protection
          and unstoppable strength is all you need to survive in Night City.
        </div>
        <button className="hero-btn">
          <NavLink className="hero-link" to="/shop">
            Shop Now
          </NavLink>
        </button>
      </div>
      <img className="hero-img" src={city} alt="cyberpunk city" />
    </div>
  );
}
