'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color;
    // Respond with the user's lucky number and end the conversation.
    conv.close('You said your favourite colour is ' + color);
});

app.intent('run demo', (conv, params) => {
    conv.close('Hi ' + params['given-name'] +'! This is the demo JJ asked me to run!');
});

// app.intent('run demo', (conv) => {
//     conv.close('Hi ' + conv.arguments.get('given-name') +'! This is the demo JJ asked me to run!');
// });

// Set the  object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);