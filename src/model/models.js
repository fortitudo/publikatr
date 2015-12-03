/*
 * This file contains custom Mongoose schemas.
*/
//var mongoose = require('mongoose');

/*
 * This is our main schema for publications.
*/
module.exports = function(mongoose) {
    var publication = new mongoose.Schema({
    
        // Information regarding editorial control
        control: {
            published:      Boolean,    //has the editorial staff aproved publishing?
            publishID:      String      //unique permanent identify for this publication
        },
        // Metadata regarding the publication itself
        metadata: {
            title:          String,
            author:         String,
            description:    String,     //short abstract
            publishDate:    Date
        }
    });
    
    var models = {
        publications: mongoose.model('publications', publication)
    };

    return models;
};    
