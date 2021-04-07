const express = require('express');
const categories = require('../components/categories/network');
const products = require('../components/products/network');
const providers = require('../components/providers/network')

const routes = function (server) {
    server.use('/category', categories);
    server.use('/product', products);
    server.use('/provider', providers)
}

module.exports = routes;