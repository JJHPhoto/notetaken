//Dependencies
//==============================================
const fs = require("fs");
const database = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
uuidv4();

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
    // console.log(addNote);

    let uniqueID = uuidv4();
    addNote["id"] = uniqueID;
    // console.log(addNote);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      let parseDB = JSON.parse(data);
      parseDB.push(req.body);
      // console.log(parseDB);

      let addToDataBase = JSON.stringify(parseDB);
      // console.log(addToDataBase);

      fs.writeFile("./db/db.json", addToDataBase, (err) => {
        if (err) throw err;
        else {
          console.log("New note created");
          res.json(addToDataBase);
        }
      });
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    let id = req.params.id;
    console.log(id);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.log("ERROR below");
        console.log(err);
        res.status(500);
        return res.send("Error");
      }

      let parseDB = JSON.parse(data);
      // console.log(JSON.stringify(parseDB));

      let newDB = parseDB.filter((removeNote) => removeNote.id !== id);

      console.log(newDB);

      // newDB.push(req.body);

      let addToDataBase = JSON.stringify(newDB);

      fs.writeFile("./db/db.json", addToDataBase, (err) => {
        if (err) throw err;
        else {
          console.log("Note deleted!");
          res.json(newDB);
          res.status(200);
        }
      });
    });
  });
};
