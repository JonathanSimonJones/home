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
    var response = "Hi ";
    
    if( (typeof params['given-name'] !== 'undefined')
    && (params['given-name'] !== "") )
    {
        response += params['given-name'];
    }
    
    response += ". This is just a demonstration that I can respond to a users request. ";
    
    if( (typeof params['number'] !== 'undefined')
    && (params['number'] !== "") )
    {
        response += "The number of routine you would like to run was specified as ";
        response += params['number'].toString();
        response += ".";
    }
    conv.close(response);
});

// app.intent('run demo', (conv) => {
//     conv.close('Hi ' + conv.arguments.get('given-name') +'! This is the demo JJ asked me to run!');
// });

// Set the  object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);