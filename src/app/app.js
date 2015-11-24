/**
  * NodeJS application for publikatr.
  *
  * @author Saskia Geuking, Gözde Can, Max Höltgen, Bernd Krippendorf, Jan Koppe
*/

/**
  * Load additional modules
*/

var compression = require('compression');
var express = require('express');


/**
  * Setup Webserver via Express and configure static routing 
*/

var webserver = express();
webserver.use(compression());
webserver.use(express.static('static'));


var server = webserver.listen(80, function() {
	console.log('Webserver running!');
});
