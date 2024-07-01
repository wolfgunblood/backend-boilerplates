// Import the necessary modules
const express = require("express"); // Express framework for handling server operations
const router = require("./routes/app"); // Import the router for handling specific routes
const notFound = require("./middleware/not-found"); // Middleware to handle 404 Not Found errors
const errorHandleMiddleware = require("./middleware/error-handler"); // Middleware to handle errors
const connectDB = require("./db/connectDB"); // Function to connect to MongoDB
require('dotenv').config(); // Load environment variables from .env file into process.env

const app = express(); // Create an Express application instance

const PORT = process.env.PORT || 3000; // Set the port number from environment variables or default to 3000

// Middleware to parse JSON bodies. This is essential for handling JSON payloads in requests.
app.use(express.json());

// Routes setup
// Set the router to handle all requests to '/api/v1'
app.use('/api/v1', router);
// Use the notFound middleware for handling requests to undefined routes
app.use(notFound);
// Error handling middleware to manage any errors that occur during request processing
app.use(errorHandleMiddleware);

// IF do not require DB
/* app.listen(PORT,() => {
     console.log(`Server listening at PORT ${PORT}`)
 })*/
 
// Function to start the application and connect to the database
const main = async () => {
    try {
        // Connect to MongoDB using the URL from environment variables
        await connectDB(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        // Start the Express server on the specified PORT
        app.listen(PORT, () => {
            console.log(`Server listening on PORT ${PORT}`);
        });
    } catch (error) {
        // Log any errors that occur during the connection or server setup
        console.log(error);
    }
}

// Call the main function to start the server and database connection
main();

