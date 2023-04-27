const {addCategory,getCategory,updateCategory,deleteCategory} = require('../controller/category');
const Route = require('express').Router();

Route.post("/addCategory", addCategory);
Route.get("/getCategory", getCategory);
Route.patch("/updateCategory", updateCategory);
Route.delete("/deleteCategory", deleteCategory);

module.exports = {
  category: Route
};