// Get our dependencies
var express = require("express");
var app = express();
var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: process.env.DB_HOST || "error",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
  database: "movie_db",
});

connection.connect();

function getMovies(callback) {
  connection.query("SELECT * FROM movie_db.moviereview", function (err, rows) {
    callback(err, rows);
  });
}

//Testing endpoint
app.get("/", function (req, res) {
  var response = [{ response: "hello" }, { code: "200" }];
  res.json(response);
});

app.get("/movies", function (_req, res) {
  // now you can call the get-driver, passing a callback function
  getMovies(function (_err, moviesResult) {
    if (_err != null) res.json(_err);
    // you might want to do something is err is not null...
    res.json(moviesResult);
  });
});

function getReviewers(callback) {
  connection.query("SELECT * FROM movie_db.reviewer", function (err, rows) {
    callback(err, rows);
  });
}

// Implement the reviewers API endpoint
app.get("/reviewers", function (_req, res) {
  // now you can call the get-driver, passing a callback function
  getReviewers(function (_err, reviewers) {
    if (_err != null) res.json(_err);
    // you might want to do something is err is not null...
    res.json(reviewers);
  });
});

function getPublications(callback) {
  connection.query("SELECT * FROM movie_db.publication", function (err, rows) {
    callback(err, rows);
  });
}

// Implement the publications API endpoint
app.get("/publications", function (_req, res) {
  // now you can call the get-driver, passing a callback function
  getPublications(function (_err, publications) {
    if (_err != null) res.json(_err);
    // you might want to do something is err is not null...
    res.json(publications);
  });
});

// Implement the pending reviews API endpoint
app.get("/pending", function (req, res) {
  var pending = [
    {
      title: "Superman: Homecoming",
      release: "2017",
      score: 10,
      reviewer: "Chris Harris",
      publication: "International Movie Critic",
    },
    {
      title: "Wonder Woman",
      release: "2017",
      score: 8,
      reviewer: "Martin Thomas",
      publication: "TheOne",
    },
    {
      title: "Doctor Strange",
      release: "2016",
      score: 7,
      reviewer: "Anthony Miller",
      publication: "ComicBookHero.com",
    },
  ];
  res.json(pending);
});
console.log("server listening through port: " + process.env.PORT);
// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT || 3000);
module.exports = app;
