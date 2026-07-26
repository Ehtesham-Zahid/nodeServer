// Import the Express framework to create a web server
const express = require("express");

// Create an instance of an Express application
const app = express();

// Middleware to log incoming requests for debugging purposes
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});

// Define a route handler for GET requests to the root path ("/")
// When a client accesses the root URL, the server responds with a simple greeting message.
app.get("/", (req, res) => {
  console.log("Handling GET request for /");
  res.send("Hello from EC2!");
});

// Start the server and have it listen on port 7070.
// Once the server is up and running, log a message to the console.
app.listen(7070, () => {
  console.log("Server running on port 7070");
});