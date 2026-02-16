import React, { useEffect, useState } from "react";
import API from "../services/api";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.shopPage}>
      <div style={styles.overlay}>

        {/* HERO TEXT SECTION */}
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>SafariChiq</h1>
          <p style={styles.heroText}>
            Premium Streetwear Crafted for Confidence, Identity, and Bold Expression.
            Designed for men, women, and kids who embrace luxury and authenticity.
          </p>

          <div style={styles.whySection}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>✔ Premium Quality Materials</li>
              <li>✔ Affordable Luxury Pricing</li>
              <li>✔ Unique Streetwear Identity</li>
              <li>✔ Fast & Reliable Delivery</li>
              <li>✔ Designed for Confidence</li>
            </ul>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <h2 style={styles.collectionTitle}>Our Collection</h2>

        <div style={styles.productsGrid}>
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div key={product._id} style={styles.productCard}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
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
            ))
          )}
        </div>

      </div>
    </div>
  );
}

const styles = {
  shopPage: {
    backgroundImage: "url('/Safarichiq.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    minHeight: "100vh",
    padding: "50px",
    color: "white",
  },
  heroContent: {
    maxWidth: "800px",
    marginBottom: "50px",
  },
  heroTitle: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "gold",
    marginBottom: "20px",
  },
  heroText: {
    fontSize: "20px",
    lineHeight: "1.6",
  },
  whySection: {
    marginTop: "30px",
    fontSize: "18px",
  },
  collectionTitle: {
    marginTop: "40px",
    fontSize: "36px",
    color: "gold",
    marginBottom: "30px",
  },
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

export default Products;







