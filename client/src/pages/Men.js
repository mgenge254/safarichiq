import React, { useEffect, useState } from "react";
import API from "../services/api";

function Men({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        // Filter only men's products
        const menProducts = res.data.filter((p) => p.category === "men");
        setProducts(menProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products-container">
      <h2>Men Collection</h2>
      <p>Explore all our premium men's streetwear.</p>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">Ksh {product.price}</p>
              <button className="btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;


