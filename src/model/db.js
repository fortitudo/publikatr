/*
 * This file handles the Mongoose connection to the MongoDB Server.
 */

/**
 *  Load and Setup debug logger 
*/

var debug = require('debug')('mongoose');

var mongoose = require('mongoose');

//Include our custom Mongoose schemas
var schemas = require('./schema');

// Initiate the database connection
var dburi = 'mongodb://localhost/publikatr';
mongoose.connect(dburi);


// Inform about connection events
mongoose.connection.on('connected', function() {
    debug('Connection to ' + dburi + ' succesful.');
});

mongoose.connection.on('error', function(err) {
    debug('Connection to ' + dburi + ' failed: ' + err);
});

mongoose.connection.on('disconnected', function() {
    debug('Connection to ' + dburi + ' has been closed.');
});

// Gracefully close database connection when Node Server is terminated
process.on('SIGINT', function() {
    mongoose.connection.close();
    process.exit(0);
});
