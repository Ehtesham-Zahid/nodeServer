const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from EC2!");
});

// New endpoint that returns "Hello World" inside an h1 tag
app.get("/hello", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(7070, () => {
  console.log("Server running on port 7070");
});