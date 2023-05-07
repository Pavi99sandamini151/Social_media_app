const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const cors = require('cors')({ origin: true });

// Create an HTTP endpoint for your frontend
exports.myFunction = functions.https.onRequest((request, response) => {
  // Use the cors middleware to handle CORS
  cors(request, response, () => {
    // Handle your API endpoint logic here
    response.send('Hello from Firebase Functions!');
  });
});
