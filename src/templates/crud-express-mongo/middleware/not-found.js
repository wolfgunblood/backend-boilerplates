// Middleware function to handle routes that are not found
const notFound = (req, res) => {
  console.log("ROUTE DOES NOT EXIST");
  // Respond with a 404 status code and send a 'not found' message to the client
  return res.status(404).send("not found");
};

module.exports = notFound;
