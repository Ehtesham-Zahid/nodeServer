// Import the Express framework to create a web server
const express = require("express");

// Create an instance of an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log each incoming request with method, URL, timestamp, headers, and body
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);
  if (Object.keys(req.body).length) {
    console.log(`Body: ${JSON.stringify(req.body)}`);
  }
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

// Global error handling middleware to catch and log errors
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).send("Internal Server Error");
});
