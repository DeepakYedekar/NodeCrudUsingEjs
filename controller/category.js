const db = require("../db/connection");

const getCategory = async (req, res) => {
  try {
    let query = "select * from category";
    db.query(query, function (err, results) {
      if (results) {
        return res.send(results);
      } else {
        return res.send('data not found');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const addCategory = (req, res) => {
  try {
    let { categoryName } = req.body;
    let query = `select * from category where name=?`;
    db.query(query, [categoryName], function (error, result) {
      if (!result.length) {
        query = `insert into category(name) values (?)`;
        db.query(query, [categoryName], function (err, result) {
          if (result) {
            res.setHeader("Content-Type", "text/html");
            res.write(
              "<html><head><title>My Page</title></head><body><h1>Category Added Successfully</h1></body></html>"
            );
            res.end();
          }
        });
      } else {
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><head><title>My Page</title></head><body><h1>Please Provie Values Properly</h1></body></html>"
        );
        res.end();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = (req, res) => {
  try {
    let { categoryName } = req.body;
    let query = "delete from category where name=?";
    db.query(query, [categoryName], function (err, result) {
      if (result) {
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><head><title>My Page</title></head><body><h1>Category Deleted Successfully</h1></body></html>"
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

const updateCategory = (req, res) => {
  try {
    let { categoryId, categoryName } = req.body;
    let query = "update category set name=? where categoryId=?";
    db.query(query, [categoryName, categoryId], function (error, result) {
      if (result) {
        res.setHeader("Content-Type", "text/html");
        res.write(
          "<html><head><title>My Page</title></head><body><h1>Category Updated Successfully</h1></body></html>"
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
  getCategory,
  addCategory,
  deleteCategory,
  updateCategory
};
