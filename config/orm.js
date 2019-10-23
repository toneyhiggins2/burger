var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, colToSearch) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, tableValue) {
    var queryString = "INSERT INTO ?? VALUES ??";
    console.log(queryString);
    connection.query(queryString, [table, tableValue], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, colName, updateValue, updateID) {
    var queryString =
      "SELECT ?? FROM ?? SET ?? WHERE ?? = ?";

    connection.query(
      queryString,
      [table, colName, updateValue, updateID],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;