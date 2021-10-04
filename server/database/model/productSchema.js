const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    require: [true, "Please Enter Product Price"],
    maxLength: [8, "Max charecter 8 accept "],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "Please Enter Product Category"],
  },
  stock: {
    type: Number,
    require: [true, "Please Enter Product Stock"],
    maxLength: [4, "Stock can't aceed 4 Charecter"],
    default: 1,
  },
  numOfReviews: {
    type: String,
    require: true,
  },
  review: [
    {
      name: {
        type: String,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("products", ProductSchema);
