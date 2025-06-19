const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

// catch all routes
app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
