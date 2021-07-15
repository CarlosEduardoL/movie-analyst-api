const express = require("express");

function app(database) {

  const app = express();

  //Testing endpoint
  app.get("/", function (_req, res) {
    var response = [{ response: "hello" }, { code: "200" }];
    res.json(response);
  });

  app.get("/movies", function (_req, res) {
    database.getMovies(function (_err, moviesResult) {
      if (_err != null) res.json(_err);
      res.json(moviesResult);
    });
  });

  // Implement the reviewers API endpoint
  app.get("/reviewers", function (_req, res) {
    database.getReviewers(function (_err, reviewers) {
      if (_err != null) res.json(_err);
      res.json(reviewers);
    });
  });

  // Implement the publications API endpoint
  app.get("/publications", function (_req, res) {
    database.getPublications(function (_err, publications) {
      if (_err != null) res.json(_err);
      res.json(publications);
    });
  });

  return app
}

module.exports = {app}