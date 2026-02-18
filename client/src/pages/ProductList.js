import React, { useEffect, useState } from "react";
import API from "../services/api";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ color: "white" }}>Loading products...</p>;
  }

  return (
    <div style={styles.productsGrid}>
      {products.map((product) => (
        <div key={product._id} style={styles.productCard}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.productImage}
            loading="lazy"
          />

          <div style={styles.productInfo}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p style={styles.price}>Ksh {product.price}</p>

            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "30px",
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
    color: "black",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  productImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
  productInfo: {
    padding: "15px",
    textAlign: "center",
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },
  button: {
    backgroundColor: "gold",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "5px",
  },
};

export default ProductList;
