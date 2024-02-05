import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCheckboxChange = () => {
    setShowOnlyInStock(!showOnlyInStock);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const meetsStockCriteria =
      !showOnlyInStock || (showOnlyInStock && product.inStock);

    return matchesSearch && meetsStockCriteria;
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        handleSearch={handleSearch}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
