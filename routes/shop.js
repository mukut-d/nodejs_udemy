const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const product = adminData.product;
  res.render("shop", { products: product, docTitle: "Shop" });
});

module.exports = router;
