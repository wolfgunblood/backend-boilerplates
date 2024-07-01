// Import the asyncWrapper middleware to handle errors in asynchronous functions
const asyncWrapper = require("../middleware/async");

/**
 * Handles GET requests to a route.
 * Wrapped with asyncWrapper to ensure any thrown errors are caught and handled.
 * 
 * @returns JSON response with a message.
 */
const GET = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "GET ROUTE !!" });
});

/**
 * Handles POST requests to a route.
 * Wrapped with asyncWrapper to manage errors during asynchronous execution.
 * 
 * @returns JSON response with a message.
 */
const POST = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "POST ROUTE !!" });
});

/**
 * Handles DELETE requests to a route.
 * Uses asyncWrapper to catch and handle errors from the async operation.
 * 
 * @returns JSON response with a message.
 */
const DELETE = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "DELETE ROUTE !!" });
});

/**
 * Handles PATCH requests to a route.
 * Async operations are wrapped in asyncWrapper for error handling.
 * 
 * @returns JSON response with a message.
 */
const PATCH = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "PATCH ROUTE !!" });
});

// Export the route handlers for use in other parts of the application
module.exports = { GET, POST, DELETE, PATCH };
