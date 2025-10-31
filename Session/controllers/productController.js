const Products = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await Products.findAll();

  res.status(200).json({ allProducts: products });
};

const setProducts = async (req, res) => {
  const { name, price } = req.body;

  const product = await Products.create({
    name: name,
    price: price,
  });

  res.status(201).json({ product: product });
};

const deleteProducts = async (req, res) => {
  const productId = req.params.id;
  const product = await Products.findOne({ where: { id: productId } });

  if (!product) {
    return res.status(404).json("Product son't exists");
  }

  const deleteProduct = await Products.destroy({
    where: {
      id: productId,
    },
  });

  res.status(200).json({ message: "Product has deleted" });
};

module.exports = { getProducts, setProducts, deleteProducts };
