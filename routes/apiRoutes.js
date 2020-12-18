//Dependencies
//==============================================
const fs = require("fs");
let database = require("../db/db.json");

// ROUTING
//==============================================

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // console.log(data);
      let database = JSON.parse(data);
      console.log(database);
      // res.json(database);
    });
  });
};
