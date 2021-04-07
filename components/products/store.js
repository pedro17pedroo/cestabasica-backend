const Model = require('./model');

function addProduct(product) {
    const products = new Model(product)
    products.save();
}

async function getProducts(){
    const products = await Model.find();
    return products;
};

async function getProductById(id) {
    const product = await Model.find({
        _id: id
    });
    return product
}

async function getProdByCategory(id) {
    const products = await Model.find({
        category:id
    })
    return products
}

async function updatProduct(id, name, price, file, provider, category) {
    const product = await Model.findOne({
        _id:id
    });
    
    product.name = name;
    product.price = price;
    product.file = file;
    product.category = category;
    product.provider = provider

    const actualized = await product.save()
    return actualized;
}

module.exports = {
    add: addProduct,
    list: getProducts,
    updat: updatProduct,
    listByCategory: getProdByCategory,
    getProductById: getProductById
}