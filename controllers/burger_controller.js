var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
  //access Burger all function and passes the returned data to handlebars for rendering to main page
  db.Burger.findAll().then();
});

router.post("/api/burgers", function (req, res) {
  //captures incoming data
  var newBurger = req.body.name;
  //access Burger reate function to create new burger in database, returns a json object containing the id of the newly create entry

});

router.put("/api/burgers/:id", function (req, res) {
  //creates condition of "id = ?" where the ? is the id that has been clicked on in the html  

});

module.exports = router;