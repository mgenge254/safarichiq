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
    <div className="products-container">
      <h2>Our Collection</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
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

export default Products;



