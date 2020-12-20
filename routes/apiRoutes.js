//Dependencies
//==============================================
const fs = require("fs");
const database = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
uuidv4();
// console.log("uuid: " + uuidv4());
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

      //selecting entire array, not individual notes
      let newDB = parseDB.filter((removeNote) => removeNote.id !== id);

      console.log(newDB);

      newDB.push(req.body);

      let addToDataBase = JSON.stringify(newDB);

      fs.writeFile("./db/db.json", addToDataBase, (err) => {
        if (err) throw err;
        else {
          console.log("Note deleted! You next!");
          res.json(newDB);
          res.status(200);
        }
      });

      // need to fs.writeFile to db.json
      // return res.send("Removed");
    });
  });

  // [
  //    { title: "a",text: "b", id: "123" },
  //    { title: "a",text: "b", id: "456" }
  // ]

  // data = data.filter((item) => item !== id);

  // let value = 3;

  // let arr = [1, 2, 3, 4, 5, 3];

  // arr = arr.filter((item) => item !== value);

  // console.log(arr);
  // [ 1, 2, 4, 5 ]
  // const uniqueID = req.params.id;
  // for (let i = 0; i < database.length; i++) {
  //   if (database[i].id === uniqueID) {
  //     database.splice(i, 1);
  //   }
  // }
  // let notes = [];
  // const { id } = req.params;
  // let db = "./db/db.json";
  // db.remove(id).then((remove) => {
  //   if (removed) {
  //     res.status(204).end();
  //   } else {
  //     res.status(404).json({ message: "Not Found" });
  //   }
  // });
  // const idCheck = req.params.id;
  // let notes = [];
  // console.log(req.query.uniqueID);
  // if (req.query.uniqueID) {
  //   console.log("Deleting note: " + req.query.uniqueID);
  //   res.status(200).send({});
  // } else {
  //   res.status(400).send("Please specify which note.");
  // }
  // res.send("Deleted!");
  // });
};
