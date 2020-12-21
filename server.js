// Express server set up
// ==============================================

const express = require("express");

let app = express();
let PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routes
//==============================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
// ==============================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
