/*
 * This file handles the Mongoose connection to the MongoDB Server.
 */

var mongoose = require('mongoose');

//Include our custom Mongoose schemas
var schemas = require('./schema');

// Initiate the database connection
var dburi = 'mongodb://localhost/publikatr';
mongoose.connect(dburi);


// Inform about connection events
mongoose.connection.on('connected', function() {
    console.log('Connection to ' + dburi + ' succesful.');
});

mongoose.connection.on('error', function(err) {
    console.log('Connection to ' + dburi + ' failed: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Connection to ' + dburi + ' has been closed.');
});

// Gracefully close database connection when Node Server is terminated
process.on('SIGINT', function() {
    mongoose.connection.close();
    process.exit(0);
});
