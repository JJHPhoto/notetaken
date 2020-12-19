let path = require("path");

module.exports = function (app) {
  app.get("/notes", function (req, res) {
    // res.json(testing);
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (req, res) {
    // res.send("Hello humans you are tiny!");
    //return the content of the index.html
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
