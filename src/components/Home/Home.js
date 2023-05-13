import "./styles/Home.css";
import Promises from "./Promises";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Promises />
    </div>
  );
}
