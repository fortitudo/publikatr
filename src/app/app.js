/*
 * NodeJS application for publikatr.
 *
 * @author Saskia Geuking, Gözde Can, Max Höltgen, Bernd Krippendorf, Jan Koppe
*/

/**
 *  Load and Setup debug logger 
*/

var debug = require('debug')('main');

/**
  * Load additional modules
*/

var compression = require('compression');
var express = require('express');
var db = require('./model/db');



/**
  * Setup Webserver via Express and configure static routing 
*/

var webserver = express();
webserver.use(compression());
webserver.use(express.static('static'));

//enable jade template engine. everything will be handled via express.
webserver.set('view engine', 'jade');

webserver.get('/', function (req,res) {
    debug('Served / to ' + req.ip);
    res.render('index', {title: 'Hi!', message: 'Hello World!'});
});

var server = webserver.listen(8080, function() {
	debug('Webserver running!');
});
