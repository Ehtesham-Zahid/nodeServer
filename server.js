// Import the Express framework to create a web server
const express = require("express");

// Create an instance of an Express application
const app = express();

// Middleware to log each incoming request for debugging purposes
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check middleware – responds to GET /health with a 200 status and JSON payload
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Define a route handler for GET requests to the root path ("/")
// When a client accesses the root URL, the server responds with a simple greeting message.
app.get("/", (req, res) => {
  res.send("Hello from EC2!");
});

// Start the server and have it listen on port 7070.
// Once the server is up and running, log a message to the console.
app.listen(7070, () => {
  console.log("Server running on port 7070");
});