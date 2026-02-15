require("dotenv").config(); // Load environment variables FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ CORS Configuration (Allow React frontend)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ Import routes
const productRoutes = require("./routes/products");

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("SafariChiq backend is running!");
});

// ✅ Use product routes
app.use("/api/products", productRoutes);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


