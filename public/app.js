const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.get("*", (req, res) => {
  var options = {
    root: path.join(__dirname, "dist/club-site"),
  };

  return res.sendFile("index.html", options);
});

app.listen(port, () => {
  console.log(`Web Dev Carolina listening at http://localhost:${port}`);
});
