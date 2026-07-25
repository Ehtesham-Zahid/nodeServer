const express = require("express");

const app = express();

// Simple request logger middleware
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Hello from EC2!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  const now = new Date().toISOString();
  console.error(`[${now}] Error:`, err);
  res.status(500).send("Internal Server Error");
});

app.listen(7070, () => {
  console.log("Server running on port 7070");
});
