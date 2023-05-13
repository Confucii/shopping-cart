import "./styles/Promises.css";
import PromiseElement from "./PromiseElement";
import cat from "./images/cat.svg";
import pistol from "./images/pistol.svg";
import shield from "./images/shield-half-full.svg";

export default function Promises() {
  return (
    <div className="Promises">
      <PromiseElement
        image={pistol}
        alt="Pistol"
        text="To effectively safeguard your life and prove dangerous to everyone else we make our suits powerful. Advanced weapons, enhanced physical strength, and built-in medical treatments make you an ultimate fighting machine."
      />
      <PromiseElement
        image={shield}
        alt="Shield"
        text="
Your safety is of utmost importance to us. Advanced materials provide superior protection and comfort, while built-in shock absorbers and hidden compartments make it perfect for urban warriors."
      />
      <PromiseElement
        image={cat}
        alt="Cat"
        text="Our designs are made to be fashionable. With smooth metallic lines, playful colors, and advanced protection features, this suit is the perfect combination of cute and fierce. Some designs feature feline features."
      />
    </div>
  );
}
