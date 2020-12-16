//Dependencies
//==============================================

let express = require("express");

// Sets up the Express App
// ==============================================

let app = express();
let PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routes
//==============================================

app.get("/", function (req, res) {
  res.send("Hello humans you are tiny!");
});

// Listener
// ==============================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
