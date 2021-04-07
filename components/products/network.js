const express = require('express');
const multer = require('multer');
const config = require('../../config');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'public/'+ config.filesRoute +'/'
});

router.post('/addProduct', upload.single('file'), function(req, res) {
    
    controller.addProduct(
        req.body.name, 
        req.body.price, 
        req.file, 
        req.body.provider, 
        req.body.category,)
    .then((product) => {
            response.success(req, res, product, 201)
    })
    .catch(e =>{
            response.error(req, res, "producto no adicionado", 500)
    })
});

router.get('/list', function(req, res) {
    controller.getProducts()
    .then((products) => {
        res.status(200).send(products)
    })
    .catch(e =>{
        response.error(req, res, "Error interno", 500, e)
    })
});

router.get('/:id', function(req, res) {
    controller.getProdByCategory(req.params.id)
    .then((product) => {
        res.status(200).send(product)
    })
    .catch(e => {
        response.error(req, res, "Error en el controller", 500, e)
    })
});

router.get('/productId/:id', function(req, res) {
    controller.getProductById(req.params.id)
    .then((product) => {
        res.status(200).send(product)
    })
    .catch(e =>{
        response.error(req, res, 'Error en el controller')
    })
})

router.patch('/:id', function(req, res) {
    controller.updatProduct(
        req.params.id,
        req.body.name,
        req.body.price,
        req.body.file,
        req.body.provider,
        req.body.category
    )
    .then((product) => {
            response.success(req, res, product, 200)
    })
    .catch(e =>{
            response.error(req, res, "producto no actualizado", 500)
    })
});


module.exports = router