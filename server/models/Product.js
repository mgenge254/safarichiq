const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true }, // men, women, kids
    price: { type: Number, required: true },
    image: { type: String, required: true }, // URL of image
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
