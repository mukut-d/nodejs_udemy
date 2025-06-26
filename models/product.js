const fs = require("fs");
const path = require("path");
const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // products.push(this);
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products"
    );
  }

  static fetchAll() {
    return products;
  }
};
