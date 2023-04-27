const {
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory
} = require("../controller/category");
const Route = require("express").Router();

Route.get("/addProductPage", (req, res) => {
  res.render("addProduct");
});

Route.get("/addCategoryPage", (req, res) => {
  res.render("addCategory");
});

Route.get("/updateProductPage", (req, res) => {
  res.render("updateProduct");
});

Route.get("/updateCategoryPage", (req, res) => {
  res.render("updateCategory");
});

Route.get("/deleteProductPage", (req, res) => {
  res.render("deleteProduct");
});

Route.get("/deleteCategoryPage", (req, res) => {
  res.render("deleteCategory");
});

Route.get("/viewCategoryPage", async (req, res) => {
  const response = await fetch("http://localhost:4000/getCategory");
  let category = await response.json();
  category = category.slice(0, category.length);
  res.render("viewCategory", { data: category });
});

Route.get("/viewProductPage", async (req, res) => {
  const pageSize = 10;
  const response = await fetch("http://localhost:4000/getProduct");
  let product = await response.json();
  const currentPage = parseInt(req.query.page)||1;
  
   const totalPages = Math.ceil(product.length / pageSize);

   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;
   const currentItems = product.slice(startIndex, endIndex);
  res.render("viewProduct", { data: currentItems,currentPage,totalPages});
});

module.exports = {
  Page: Route
};
