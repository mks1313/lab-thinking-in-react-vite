const ProductRow = ({ product }) => {
  const textColor = product.inStock ? "black" : "red";

  return (
    <tr style={{ color: textColor }}>
      <td> {product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
