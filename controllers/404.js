exports.get404 = (req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found", path: "" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
};
