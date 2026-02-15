import React from "react";

function Cart({ cartItems }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h4>{item.name}</h4>
            <p>Ksh {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

