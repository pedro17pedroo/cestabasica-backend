const config = require('../../config');
const store = require('./store');

/**añadir producto */
function addProduct(name, price, file, provider, category) {
    return new Promise((resolve, reject) => {
        if(!name || !price || !provider || !category) {
            console.log('dados incompletos')
            console.log(name, price, provider, category)
            reject("Revisa o formulario")
            return false;
        }

        let fileUrl = '';
        if(file) {
            fileUrl = config.host +':'+ config.port + config.publicRoute + '/' +config.filesRoute+ '/' + file.filename;
        }

        const fullProduct = {
            name: name,
            price: price,
            provider: provider,
            category: category,
            file: fileUrl,
            date: new Date()
        }
        
        store.add(fullProduct)
        resolve(fullProduct)
    })
}

function getProducts() {
    return new Promise((resolve, reject) => {
       resolve(store.list())
    })
}

function getProductById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            console.log('Invalid parameter')
            reject('Invalid parameter')
            return false;
        }

        resolve(store.getProductById(id))
    })
}

function getProdByCategory(id) {
    return new Promise((resolve, reject) => {

        if (!id) {
            console.log("Categoria invalida")
            reject("Categoria invalida")
            return false;
        }
              
        resolve(store.listByCategory(id))

    })
}

function updatProduct(id, name, price, file, provider, category) {
    return new Promise(async (resolve, reject) => {
        if(!id) {
            reject('identificador invalido invalidos')
            return false;
        }
        const result = await store.updat(id, name, price, file, provider, category
        )
        resolve(result)
    })
}

module.exports = {
    addProduct,
    getProducts,
    getProdByCategory,
    updatProduct,
    getProductById
}