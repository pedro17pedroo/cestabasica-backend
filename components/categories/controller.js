const config = require('../../config');
const store = require('./store');

/**añadir categoria */
function addCategory(name, description, file){
    return new Promise((resolve, reject) => {
        if(!name) {
            console.error('sem categoria')
            reject('dados incorrectos')
            return false;
        }

        let fileUrl = '';
        if(file) {
            fileUrl = config.host +':'+ config.port + config.publicRoute + '/' +config.filesRoute+ '/' + file.filename;
        }

        const fullCategory = {
            name: name,
            description: description,
            file:fileUrl,
            date: new Date(),
        }
        store.add(fullCategory)
        resolve(fullCategory)
    });
}

/**listar categorias */
function getCategories(){
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

/**actualizar categoria */
 function updatCategory(id, name, description, file) {
    return new Promise(async (resolve, reject) => {
        if(!id){
            reject('dados invalidos')
            return false;
        }
        const result = await store.updat(id, name, description, file)
        resolve(result)
    })
}

/**delete categoria */
function deleteCategory(id) {
    return new Promise((resolve, reject) => {
        if(!id){
            reject('parametro incorrecto')
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e =>{
                reject(e);
            })
    })
}

module.exports = {
    addCategory,
    getCategories,
    updatCategory,
    deleteCategory
}
