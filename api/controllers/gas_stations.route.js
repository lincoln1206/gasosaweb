// business.route.js

const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('../models/gas_stations.model');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
        if(err){
            console.log(err);
        }
        else {
            res.json(businesses);
        }
    });
});

// Find Business by Id
businessRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business){
        res.json(business);
    });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
        if (!business)
            res.status(404).send("data is not found");
        else {
            business.gasStationName = req.body.gasStationName;
            business.gasStationCnpj = req.body.gasStationCnpj;
            business.gasStationCep = req.body.gasStationCep;
            business.gasolina = req.body.gasolina;
            business.alcool = req.body.alcool;
            business.diesel = req.body.diesel;
            business.gas = req.body.gas;

            business.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;
