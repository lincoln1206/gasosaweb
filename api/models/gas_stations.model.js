// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    gasStationName: {
        type: String
    },
    gasStationCnpj: {
        type: String
    },
    gasStationCep: {
        type: String
    }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
