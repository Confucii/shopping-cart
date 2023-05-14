import "./styles/Filter.css";

export default function Filter({ setFilter, search, setSearch }) {
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

  function handleSearchChange(e) {
    setSearch(e.currentTarget.value);
  }

  return (
    <div className="Filter">
      <p className="search-name">Search</p>
      <input
        type="text"
        name="search-input"
        id="search-input"
        onChange={handleSearchChange}
        value={search}
      />
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
