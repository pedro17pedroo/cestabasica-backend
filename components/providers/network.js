const express = require('express');
const config = require('../../config');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/addProvider', function(req, res) {
    controller.addProvider(req.body.name)
    .then((provider) => {
        res.status(200).send(provider)
        //response.success(req, res, providers, 201)
    })
    .catch((err) => {
        response.error(req, res, "Error interno", 500)
    })
});

router.get('/list', function(req, res) {
    controller.getProviders()
    .then((providers) => {
        res.status(200).send(providers)
        //response.success(req, res, products, 200)
    })
    .catch(e =>{
        response.error(req, res, "Error interno", 500, e)
    })
});

module.exports = router