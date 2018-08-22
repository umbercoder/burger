var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.


  insertOne: function(todo, callback) {
    var s = "INSERT INTO " + tableName + " (burger_name, devour) VALUES (?,?)";
    todo.complete = todo.complete || 0;
    connection.query(s, [
      todo.text, todo.complete
    ], function(err, result) {

      callback(result);

    });
  },

  updateOne: function(todo, callback) {
    var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

    connection.query(s, [
      todo.text, todo.id
    ], function(err, result) {

      callback(result);

    });
  }

};

module.exports = orm;
