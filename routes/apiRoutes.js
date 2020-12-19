//Dependencies
//==============================================
const fs = require("fs");
const database = require("../db/db.json");
// let path = require("path");

// ROUTING
//==============================================

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // console.log(data);
      let parseDB = JSON.parse(data);
      // console.log(database);
      res.json(parseDB);
    });
  });

  app.post("/api/notes", function (req, res) {
    let addNote = req.body;
    console.log(addNote);

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      let parseDB = JSON.parse(data);
      parseDB.push(req.body);
      console.log(parseDB);

      let addToDataBase = JSON.stringify(parseDB);
      console.log(addToDataBase);

      fs.writeFile("./db/db.json", addToDataBase, (err) => {
        if (err) throw err;
        else {
          console.log("New note created");
          res.json(addToDataBase);
        }
      });
    });
  });
};
