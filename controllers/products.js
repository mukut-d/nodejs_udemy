const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("add-products", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    formCSS: true,
    activeProducts: true,
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  //  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const product = Product.fetchAll();

  res.render("shop", {
    products: product,
    pageTitle: "Shop",
    path: "/",
    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true,
    // layout: false,
  });
};
