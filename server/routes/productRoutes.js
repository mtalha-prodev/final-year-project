const router = require("express").Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetail,
} = require("../controllers/productControllers.js");
const { verifyToken, authorizeRoles } = require("../middleware/verifyToken.js");

// user route
// Access: public
// url: http://localhost:500/api/v1/products
// method: GET
// get product

router
  .route("/products")
  .get(verifyToken, authorizeRoles("admin"), getAllProducts);
// get single product
router.route("/product/:id").get(getProductDetail);

// admin route
// Access: private
// url: http://localhost:500/api/v1/product/new
// method: post
// create product
router.route("/product/new").post(verifyToken, createProduct);

// admin route
// Access: private
// url: http://localhost:8000/api/v1/product/:id
// method: put
// updata product

router.route("/product/:id").put(verifyToken, updateProduct);

//delete product same mathod for update
router.route("/product/:id").delete(verifyToken, deleteProduct);

module.exports = router;
