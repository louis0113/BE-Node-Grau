const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsController");
const productsValidators = require("../validators/productsValidator");
const validateRequest = require("../middlewares/validateMiddleware");
const {
  authenticateToken,
  authorizedRoles,
} = require("../middlewares/authMiddleware");

router.get("/profile", authenticateToken, productsControllers.getProducts);

router.post(
  "/admin",
  productsValidators.setProductValidation,
  validateRequest,
  authenticateToken,
  authorizedRoles("admin"),
  productsControllers.setProducts,
);

router.delete(
  "/admin/:id",
  authenticateToken,
  authorizedRoles("admin"),
  productsControllers.deleteProductsById,
);

module.exports = router;
