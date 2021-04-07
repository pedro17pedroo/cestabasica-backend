const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaProduct = new Schema({
    name:{
        type: String,
        required: true
    },

    price: String,

    file: {
        type: String,
    },

    provider: String,

    category: {
        type: Schema.ObjectId,
        ref:'Category'
    },

    date: {
        type: Date,
        default: Date.now(),
    }

});

const model = mongoose.model('Product', schemaProduct);
module.exports = model;