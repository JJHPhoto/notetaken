//Dependencies
//==============================================

const express = require("express");
// const fs = require("fs");
// const path = require("path");
const { v4: uuidv4 } = require("uuid");
uuidv4();
// console.log("uuid: " + uuidv4());

// Sets up the Express App
// ==============================================

let app = express();
let PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Test Objects
//==============================================
let testing = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000,
  },
];

//Routes
//==============================================

require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// app.get("/api/notes", function (req, res) {
//   fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) throw err;
//     // console.log(data);
//     let database = JSON.parse(data);
//     console.log(database);
//     // res.json(database);
//   });
//   //use the fs module to read the db.json file
//   //THEN parse the file contents with JSON.parse to get the real data
//   //send the parsed data back to the client with res.JSON()
// });

// app.post("/api/notes", function (req, res) {
//   //Access the POSTed data in req.body
//   //Use the fs module to read the file
//   //THEN parse the file contents with JSON.parse() to the real data
//   //Push the req.body to the array list
//   //JSON.stringify the array list back into a JSON string
//   //Then save the contents back to the db.json file with the fs module
// });

// app.get("/notes", function (req, res) {
//   // res.json(testing);
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// app.get("*", function (req, res) {
//   // res.send("Hello humans you are tiny!");
//   //return the content of the index.html
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.delete("/api/notes/:id", function (req, res) {
//   //Acess id: from 'req.params.id'
//   //Use the fs module to read the file
//   // HEN parse the file contents with JSON.parse() to the real data
//   //Option A
//   //Find the matching index using Array.findIndex()
//   //Remove the target element using the Array.splice() method
//   //Option B
//   //Use the Array.filter() method to filter out the matching element
//   myArrry = myArray.filter((element) => element.id !== req.params.id);

//   //return any kind of success message.
// });

// Listener
// ==============================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
