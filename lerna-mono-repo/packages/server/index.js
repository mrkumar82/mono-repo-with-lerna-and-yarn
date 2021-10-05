const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res, next) => {
  res.send("This is from server");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Server error");
  } else {
    console.log("Listening on port 5000");
  }
});
