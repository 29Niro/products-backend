const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the product name"],
    },
    price: {
      type: String,
      required: [true, "Please add the price"],
    },
    description: {
      type: String,
      required: [true, "Please add the description"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
