/*
 * This file contains custom Mongoose schemas.
*/
var mongoose = require('mongoose');

/*
 * This is our main schema for publications.
*/
var publication = new mongoose.Schema({

    // Information regarding editorial control
    control: {
        published: Boolean,
        publishID:String
    },


    // Metadata regarding the publication itself
    metadata: {
        title:      String,
        author:     String,
        description:String,
        publishDate:Date
    }

});
