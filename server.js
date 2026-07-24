const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from EC2!");
});

app.listen(8000, () => {
  // Server running on port 8000
});