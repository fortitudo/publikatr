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

webserver.get('/testadd', function(req,res) {

    var newPublication = new db.models.publications({metadata:{title:'Test!'}});

    newPublication.save(function (err) {
        if (err) debug('Failed to save newPublication: ' + err);
        else debug('Saving newPublication seems to have succeeded. \\o/');
    });
    
    res.render('index', {searchResults: []});
    debug('Served /testadd to ' + req.ip);
});


webserver.get('/', function (req,res) {
    
        // find all Publications, read only the metadata Part.
   var search = new Promise(function(fulfill, reject) {
        db.models.publications.find({}, 'metadata', function(err, pubs) {
            if (err) reject(err);
            else fulfill(pubs);
        });
    });

    search.then(function(results) {
        // Render the Frontpage via Jade.
        res.render('index', {searchResults:results});
        debug('Served / to ' + req.ip);  
    });
    
    
});

var server = webserver.listen(8080, function() {
	debug('Webserver running!');
});
