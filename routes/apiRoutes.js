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
      // console.log(database);
      return res.json(database);
    });
  });

  app.post("api/notes", function (req, res) {
    const addNote = req.bod;
    console.log(addNote);

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      let database = JSON.parse(data);
      console.log(database);
      database.push(req.body);

      let addToDataBase = JSON.stringify(database);
      console.log(addToDataBase);

      fs.writeFile("./db/db.json", addToDataBase, (err) => {
        if (err) throw err;
        else {
          console.log("New note created");
        }
      });
    });
  });
};
