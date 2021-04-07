const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaProvider = new Schema ({
    name: {
        type:String,
        required: true,
    }
})

const model = mongoose.model('Provider', schemaProvider);
module.exports = model;