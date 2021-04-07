const config = require ('../../config');
const store = require ('./store');

/**add provider */
function addProvider (name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            console.log("dados incorrectos")
            reject("Revisa el formulario")
            return false;
        }

        const provider = {
            name: name
        }
        store.add(provider)
        resolve(provider)
    })
}

/**get providers */
function getProviders() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addProvider,
    getProviders
}