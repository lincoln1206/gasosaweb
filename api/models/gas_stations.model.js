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
    },
    gasolina: {
        type: String, required: true
    },
    alcool: {
        type: String, required: true
    },
    diesel: {
        type: String, required: true
    },
    gas: {
        type: String, required: true
    },
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
