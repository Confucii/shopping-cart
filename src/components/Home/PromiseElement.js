import "./styles/PromiseElement.css";

export default function PromiseElement({ image, text, alt }) {
  return (
    <div className="PromiseElement">
      <img className="img-Promise-Element" src={image} alt={alt} />
      <p className="text-Promise-Element">{text}</p>
    </div>
  );
}
