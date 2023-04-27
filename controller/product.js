const db = require("../db/connection");

const getProduct = (req, res) => {
  try {
      let query =
      "SELECT p.productId, p.name AS productName, c.categoryId, c.name AS categoryName FROM product p,category c where p.categoryId = c.categoryId";
      db.query(query, function (err, results) {
          if (results) {
            return res.send(results);
          } else {
            return res.send("data not found");
          }
      })
  } catch (error) {
    console.log(error);
  }
};


const addProduct = (req, res) => {
  try {
    let { name, categoryId } = req.body;
    let query = 'select * from product where name=?';
    db.query(query, [name], function (error, result) {
      if (!result.length) {
        query = `insert into product(name,categoryId) values (?,?)`;
        db.query(query, [name, categoryId], function (err, result) {
          if (result) {
            res.setHeader("Content-Type", "text/html");
            res.write(
              "<html><head><title>My Page</title></head><body><h1>Product Added Successfully</h1></body></html>"
            );
            res.end();
          }
        });
      } else {
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = (req, res) => {
  try {
    let { productName } = req.body;
    let query = 'delete from product where name=?';
    db.query(query, [productName], function (err, result) {
      if (result) {
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><head><title>My Page</title></head><body><h1>Product Deleted Successfully</h1></body></html>"
        );
        res.end();
      } else {
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><head><title>My Page</title></head><body><h1>Please Provide Values Properly</h1></body></html>"
        );
        res.end();
      }
    })
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = (req, res) => {
  try {
    let { productId,productName } = req.body;
    let query = 'update product set name=? where productId=?';
    db.query(query, [productName, productId], function (error, result) {
      if (result) {
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><head><title>My Page</title></head><body><h1>Product Updated Successfully</h1></body></html>"
        );
        res.end();
      } else {
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><head><title>My Page</title></head><body><h1>Please Provide Values Properly</h1></body></html>"
        );
        res.end();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct
};
