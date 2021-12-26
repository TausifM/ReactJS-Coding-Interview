const Product = require("./productModel");
exports.getAllProducts = async (req, res) => {
  const products = await Product.find(req.params.id);
  res.status(200).json({
    success: true,
    message: "Route is working fine",
  });
};
