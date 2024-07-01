// Import Express and create a router instance
const express = require('express');
const router = express.Router();

// Import handlers for the HTTP methods from the controllers folder
const { GET, POST, DELETE, PATCH } = require("../controllers/app");

// Define route handlers for the root path ('/')
// GET, POST, DELETE, and PUT methods are handled by corresponding functions
router.route('/')
  .get(GET)     // Handle GET requests at the root path
  .post(POST)   // Handle POST requests at the root path
  .delete(DELETE) // Handle DELETE requests at the root path
  .put(PATCH);  // Handle PUT requests at the root path (note: typically PATCH and PUT are separate)

// Export the configured router to be used in other parts of the application
module.exports = router;
