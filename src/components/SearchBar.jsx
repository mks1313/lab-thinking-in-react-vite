const SearchBar = ({ handleSearch, handleCheckboxChange }) => {
  return (
    <div>
      <h3 style={{ fontWeight: "400" }}>Search</h3>
      <input
        className="search-bar"
        type="text"
        id="search"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <label>
          <input type="checkbox" onChange={handleCheckboxChange} />
          Only show products in stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
