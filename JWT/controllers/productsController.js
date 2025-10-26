const Products = require("../models/productModel");

const getProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll();

    res.status(200).json({ allProducts: products });
  } catch (err) {
    next(err);
  }
};

const setProducts = async (req, res, next) => {
  try {
    const { name, price } = req.body;
    const product = await Products.create({ name: name, price: price });

    res.status(201).json({ product: product });
  } catch (err) {
    next(err);
  }
};

const deleteProductsById = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const deleteProduct = await Products.destroy({
      where: {
        id: productId,
      },
    });

    if (!deleteProduct) {
      return res.status(404).json({ message: "Product don't exists" });
    }
    res
      .status(200)
      .json({ message: `Product with id ${productId} has deleted` });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProducts, setProducts, deleteProductsById };
