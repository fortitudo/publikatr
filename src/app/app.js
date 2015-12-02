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

// enable jade template engine. everything will be handled via express.
webserver.set('view engine', 'jade');

webserver.get('/', function (req,res) {
    
    // Some fake Search Results for testing the Jade Template    
    var searchResults = [
        {
            metadata: {
                title: 'If thy heart fails thee, climb not at all.',
                author: 'Queen Elizabeth',
                description: 'Some really amazing text to read.',
                publishDate: '2015-12-02'
            }
        },
        {
            metadata: {
                title: 'Bohemian Rhapsody',
                author: 'Freddie Mercury',
                publishDate: '1975-10-31'
            }
        }

    ];


    // Render the Frontpage via Jade.
    res.render('index', {searchResults: searchResults});
    debug('Served / to ' + req.ip);  
});

var server = webserver.listen(8080, function() {
	debug('Webserver running!');
});
