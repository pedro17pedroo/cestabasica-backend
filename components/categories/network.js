const express = require('express');
const multer = require('multer');
const config = require('../../config');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: '/public/files/categoria'
})
router.post('/addCategoria',upload.single('CategoryImage'), function(req, res) {
    console.log(req.file)
    controller.addCategory(req.body.name, req.body.description, req.file)
        .then((category) => {
            response.success(req, res, category, 200);
        })
        .catch(e => {
            response.error(req, res, 'bad test', 500)
        })
});

router.get('/', function(req, res) {
    controller.getCategories()
        .then((categories) => {
           res.send(categories)
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e)
        })
});

router.patch('/:id', function(req, res) {
    controller.updatCategory(
        req.params.id,
        req.body.name,
        req.body.description,
        req.body.file)
        .then((category) => {
            response.success(req, res, `Categoria ${category} actualizada`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e)
        })
});

router.delete('/:id', function(req, res) {
    controller.deleteCategory(req.params.id)
        .then(() => {
            response.success(req, res, `Categoria ${req.params.id} eliminada`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        })
})

module.exports = router;