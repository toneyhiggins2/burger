var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, colName, value, cb) {
    var queryString = `INSERT INTO ${table} (${colName}) VALUES ('${value}');`
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, colName, updateValue, updateID, value, cb) {
    var queryString =
      `UPDATE ${table} SET ${colName} = ${updateValue} WHERE ${updateID} = ${value}`;

    connection.query(
      queryString,
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;