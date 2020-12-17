//Dependencies
//==============================================

let express = require("express");
//going to need to require fs module to import it.

// Sets up the Express App
// ==============================================

let app = express();
let PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routes
//==============================================

app.get("/api/notes", function (req, res) {
  //use the fs module to read the db.json file
  //THEN parse the file contents with JSON.parse to get the real data
  //send the parsed data back to the client with res.JSON()
});

app.post("/api/notes", function (req, res) {
  //Access the POSTed data in req.body
  //Use the fs module to read the file
  //THEN parse the file contents with JSON.parse() to the real data
  //Push the req.body to the array list
  //JSON.stringify the array list back into a JSON string
  //Then save the contents back to the db.json file with the fs module
});

app.get("/notes", function (req, res) {
  res.sendFile(/**path to the notes.html file */);
});

app.get("*", function (req, res) {
  res.send("Hello humans you are tiny!");
  //return the content of the index.html
  res.sendFile(/**path to the index.html file */);
});

app.delete("/api/notes/:id", function (req, res) {
  //Acess id: from 'req.params.id'
  //Use the fs module to read the file
  // HEN parse the file contents with JSON.parse() to the real data
  //Option A
  //Find the matching index using Array.findIndex()
  //Remove the target element using the Array.splice() method
  //Option B
  //Use the Array.filter() method to filter out the matching element
  myArrry = myArray.filter((element) => element.id !== req.params.id);

  //return any kind of success message.
});

// Listener
// ==============================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
