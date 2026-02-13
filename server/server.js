require("dotenv").config(); // Load environment variables FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Import routes
const productRoutes = require("./routes/products");

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("SafariChiq backend is running!");
});

// ✅ Use product routes (all routes start with /api/products)
app.use("/api/products", productRoutes);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


