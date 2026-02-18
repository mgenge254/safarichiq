require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://safarichiq.netlify.app"
    ],
    credentials: true,
  })
);

app.use(express.json());

const productRoutes = require("./routes/products");

// Root test route
app.get("/", (req, res) => {
  res.send("SafariChiq backend is running!");
});

app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




