/**
 * Higher-order function to handle errors in asynchronous Express middleware.
 * @param {Function} fn - The async middleware function to wrap.
 * @returns {Function} A new middleware function with error handling.
 */
const asyncWrapper = (fn) => {
    // Return a new async middleware function
    return async (req, res, next) => {
        try {
            // Execute the passed asynchronous function and wait for completion
            await fn(req, res, next);
        } catch (error) {
            // If an error occurs, pass it to the next error handling middleware
            next(error);
        }
    };
}

module.exports = asyncWrapper