const { addProduct, getProduct, updateProduct, deleteProduct } = require("../controller/product");
const Route = require('express').Router();

Route.post('/addProduct', addProduct);
Route.get('/getProduct', getProduct);
Route.patch('/updateProduct', updateProduct);
Route.delete('/deleteProduct', deleteProduct);

module.exports = {
    product:Route
}