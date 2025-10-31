const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");

const {
  authenticateSession,
  authorizedRole,
} = require("../middlewares/authSession");

router.get("/", authenticateSession, productController.getProducts);

router.post(
  "/",
  authenticateSession,
  authorizedRole("admin"),
  productController.setProducts,
);

router.delete(
  "/:id",
  authenticateSession,
  authorizedRole("admin"),
  productController.deleteProducts,
);

module.exports = router;
