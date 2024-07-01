/**
 * CustomAPIError class extends the native Error class to include a status code.
 * This allows for more granular error handling, especially for HTTP responses.
 * 
 * @param {string} message - Error message for the error instance.
 * @param {number} statusCode - HTTP status code appropriate to the error.
 */
class CustomAPIError extends Error {
    constructor(message, statusCode) {
      super(message); // Calls the parent class (Error) constructor
      this.statusCode = statusCode; // Assigns a status code specific to this error instance
    }
  }
  
  /**
   * Factory function to create a new instance of CustomAPIError.
   * This provides a simplified way to generate new errors with both a message and a status code.
   * 
   * @param {string} msg - Error message for the custom error.
   * @param {number} statusCode - HTTP status code for the error.
   * @returns {CustomAPIError} - Returns a new instance of CustomAPIError.
   */
  const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
  };
  
  // Export the CustomAPIError class and the factory function for use elsewhere in the application.
  module.exports = { CustomAPIError, createCustomError };
  