// Require modules
var restify = require('restify');
var builder = require('botbuilder');


// READ THIS SECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
/* -------------------------------- CONFIGURATION & SETUP --------------------------------- */

//----- CONNECT TO GIVEN CHAT PLATFORM -----//

/*
 * There are 2 kinds of connectors.
 *    - ConsoleConnector, for local testing in the console.
 *    - ChatConnector, for online/deployment testing.
 *
 * UNCOMMENT THE CONNECTOR YOU WISH TO USE.
 */

// CONSOLE CONNECTOR
// var connector = new builder.ConsoleConnector().listen();


// CHAT CONNECTOR
// var connector = new builder.ChatConnector({
//   appId: process.env.MICROSOFT_APP_ID,
//   appPassword: process.env.MICROSOFT_APP_PASSWORD
// });
//
// var server = restify.createServer();
//
// server.post('/api/messages', connector.listen());
//
// server.get(/.*/, restify.serveStatic({
//   'directory': '.',
//   'default': 'index.html'
// }));
//
// server.listen(process.env.port || 3978, function () {
//   console.log('%s listening to %s', server.name, server.url);
// });




//----- INSTANTIATE BOT OBJECT -----//
var bot = new builder.UniversalBot(connector);

/* -------------------------------------------------------------------------------------- */




/* -------------------------------- BOT PROGRAMMING --------------------------------- 
 * -------------- Replace the Hello-World Code with your personal code -------------- */


// Root dialog
bot.dialog("/",
  function(session) {
    session.send("Hello World!");
  }
);


/* -------------------------------------------------------------------------------------- */
