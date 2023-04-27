const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const { product } = require("./routes/product");
const { category } = require("./routes/category");
const { Page } = require('./routes/pages');
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(product);
app.use(category);
app.use(Page);
let port = process.env.PORT || 3000;
app.get("*", (req, res) => {
  res.render("welcome");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
