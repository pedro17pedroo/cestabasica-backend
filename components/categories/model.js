const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaCategory = new Schema({
    name:{
        type: String,
        required: true
    },

    description: {
        type: String
    },

    file: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now(),
    }

});

const model = mongoose.model('Category', schemaCategory);
module.exports = model;