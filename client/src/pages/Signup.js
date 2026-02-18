import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    ageRange: "",
    stylePreference: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);
      alert("Account created successfully! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Signup failed. Email may already exist.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>
          Create a new account to start shopping with SafariChiq
        </p>

        <input
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Create Password"
          required
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          style={styles.input}
        />

        <select name="gender" onChange={handleChange} style={styles.input}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select name="ageRange" onChange={handleChange} style={styles.input}>
          <option value="">Select Age Range</option>
          <option value="5-8">5-8</option>
          <option value="9-14">9-14</option>
          <option value="15-18">15-18</option>
          <option value="19-25">19-25</option>
          <option value="26-35">26-35</option>
          <option value="36+">36+</option>
        </select>

        <select
          name="stylePreference"
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Style Preference</option>
          <option value="Streetwear">Streetwear</option>
          <option value="Casual">Casual</option>
          <option value="Luxury">Luxury</option>
          <option value="Athletic">Athletic</option>
        </select>

        <input
          name="location"
          placeholder="City / Location"
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Create Account
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#111",
    padding: "20px",
  },
  form: {
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "400px",
  },
  title: {
    marginBottom: "5px",
    color: "gold",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: "20px",
    fontSize: "14px",
    textAlign: "center",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "gold",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Signup;






