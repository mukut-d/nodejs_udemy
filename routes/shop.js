const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const product = adminData.product;
  res.render("shop", {
    products: product,
    pageTitle: "Shop",
    path: "/",
    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true,
    // layout: false,
  });
});

module.exports = router;
