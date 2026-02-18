import React from "react";
import ProductList from "./ProductList";

function Products({ addToCart }) {
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

        <ProductList addToCart={addToCart} />

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
};

export default Products;








