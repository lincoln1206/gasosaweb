// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    gasStationName: {
        type: String, required: true
    },
    gasStationCnpj: {
        type: String, required: true
    },
    gasStationCep: {
        type: String, required: true
    }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
