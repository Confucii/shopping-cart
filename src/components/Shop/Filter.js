import "./styles/Filter.css";

export default function Filter({ setFilter }) {
  function toggleFilter(e) {
    if (e.currentTarget.classList.contains("chosen")) {
      e.currentTarget.classList.remove("chosen");
      setFilter("");
    } else {
      document.querySelector(".chosen")?.classList.remove("chosen");
      e.currentTarget.classList.add("chosen");
      setFilter(e.currentTarget.textContent.toLowerCase());
    }
  }

  return (
    <div className="Filter">
      <p className="filter-name">Filter</p>
      <ul className="filter-list">
        <li className="filter-item" onClick={toggleFilter}>
          Red
        </li>
        <li className="filter-item" onClick={toggleFilter}>
          Pink
        </li>
        <li className="filter-item" onClick={toggleFilter}>
          Black
        </li>
        <li className="filter-item" onClick={toggleFilter}>
          Gold
        </li>
      </ul>
    </div>
  );
}
