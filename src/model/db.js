/*
 * This Module provides manages basic mongoose connections 
*/

var debug = require('debug')('mongoose');

// export our mongoose instance
var mongoose = require('mongoose');
exports.mongoose = mongoose;

// include models, pass on our mongoose instance, export models again
var models = require('./models')(mongoose);
exports.models = models;

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
