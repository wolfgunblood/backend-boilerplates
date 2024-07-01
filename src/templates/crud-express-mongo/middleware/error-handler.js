/**
 * Error handling middleware for Express applications.
 * This middleware function checks if the error is an instance of CustomAPIError
 * and handles it accordingly by sending a custom response. If the error is not
 * a CustomAPIError, it sends a generic 500 Internal Server Error response.
 *
 * @param {Object} err - The error object passed from previous middleware or route handlers.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the stack.
 */
const errorHandleMiddleware = (err, req, res, next) => {
    // Check if the error is an instance of CustomAPIError
    if (err instanceof CustomAPIError) {
      // Log the custom error for debugging purposes
      console.log(`Custom Api Error`, err);
      // Respond with the specific status code and the error message
      return res.status(err.statusCode).json({ msg: err.message });
    }
    // Log any other types of errors
    console.log(`Error`, err);
    // Respond with a generic 500 Internal Server Error for all other types of errors
    return res.status(500).send("something went wrong");
  };
  
  // Export the error handling middleware to be used in other parts of the application
  module.exports = errorHandleMiddleware;
  