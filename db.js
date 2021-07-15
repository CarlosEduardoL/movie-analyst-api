const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || undefined,
  database: "movie_db",
});

connection.connect();

function getMovies(callback) {
  connection.query("SELECT * FROM movie_db.moviereview", function (err, rows) {
    callback(err, rows);
  });
}

function getReviewers(callback) {
  connection.query("SELECT * FROM movie_db.reviewer", function (err, rows) {
    callback(err, rows);
  });
}

function getPublications(callback) {
  connection.query("SELECT * FROM movie_db.publication", function (err, rows) {
    callback(err, rows);
  });
}

module.exports = {getMovies, getReviewers, getPublications}