var db = require("../models");

module.exports = function (app) {
  // GET route for getting all of the todos
  app.get("/", function (req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Burgers.findAll().then(function (result) {
      var dataArr = [];
      result.forEach(function (current) {
        dataArr.push(current.dataValues);
      })
      var hbsDataObj = {
        burgers: dataArr
      };
      res.render("index", hbsDataObj);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/burgers", function (req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    var newBurger = req.body;
    db.Burgers.create(newBurger).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      // print the error details
      console.log(err);
    });;
  });

  app.put("/api/burgers/:id", function (req, res) {
    db.Burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    });
  });
};