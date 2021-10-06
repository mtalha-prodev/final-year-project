const Product = require("../database/model/productSchema.js");
const ApiFeatures = require("../utils/apifeatures.js");
const ErrorHandler = require("../utils/errorHandler.js");

// create new product -- only admin

exports.createProduct = async (req, res, next) => {
  try {
    const products = await Product.create(req.body);

    res.status(200).json({
      status: true,
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "request fail !",
      error,
    });
  }
};

// get all product
exports.getAllProducts = async (req, res) => {
  try {
    // search products
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter();

    const products = await apiFeature.query;

    res.status(200).json({
      status: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "product not found",
      error,
    });
  }
};

// get single product
exports.getProductDetail = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "product not found",
      error,
    });
  }
};

// updata product --- admin

exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(500).json({
        status: false,
        message: "product not found",
      });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "product not found",
      error,
    });
  }
};

// delete product

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    await product.remove();

    res.status(200).json({
      status: true,
      message: "product delete successfuly",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "product not delete",
      error,
    });
  }
};
