// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

/**
 * Connects to a MongoDB database using the provided URL.
 * @param {string} url - The MongoDB connection string.
 * @returns {Promise} A promise that resolves when the connection is successful.
 */
const connectDB = (url) => {
  // Connect to the MongoDB using the given URL
  return mongoose.connect(url);
}

// Export the connectDB function to be used in other parts of the application
module.exports = connectDB;
