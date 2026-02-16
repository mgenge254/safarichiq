import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />

     <Routes>
  <Route path="/" element={<Products addToCart={addToCart} />} />
  <Route path="/cart" element={<Cart cartItems={cartItems} />} />
  <Route path="/men" element={<Men addToCart={addToCart} />} />
  <Route path="/women" element={<Women addToCart={addToCart} />} />
  <Route path="/kids" element={<Kids addToCart={addToCart} />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes>

    </>
  );
}

export default App;

