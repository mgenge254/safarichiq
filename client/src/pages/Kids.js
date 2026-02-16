import React, { useEffect, useState } from "react";
import API from "../services/api";

function Kids({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        const kidsProducts = res.data.filter((p) => p.category === "kids");
        setProducts(kidsProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products-container">
      <h2>Kids Collection</h2>
      <p>Explore our fun and trendy kids' clothing.</p>

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

export default Kids;


