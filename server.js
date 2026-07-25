// Import the Express framework to create a web server
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define a route handler for GET requests to the root path ("/")
// When a client accesses the root URL, the server responds with a simple greeting message.
app.get("/", (req, res) => {
  res.send("Hello from EC2!");
});

// Start the server and have it listen on port 9999.
// Once the server is up and running, log a message to the console.
app.listen(9999, () => {
  console.log("Server running on port 9999");
});