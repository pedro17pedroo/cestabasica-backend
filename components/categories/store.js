const Model = require('./model');

function addCategory(category) {
    const categories= new Model(category)
    categories.save();
}

async function getCategory() {
    const categories = await Model.find();
    return categories;
}

async function updatCategory(id, name, description, file) {
    const category = await Model.findOne({
        _id:id
    });
    category.name = name;
    category.description = description;
    category.file = file;
    const actualized = await category.save();
    return actualized;
}

function deleteCategory(id) {
    return Model.deleteOne({
        _id:id
    })
}

module.exports = {
    add: addCategory,
    list: getCategory,
    updat: updatCategory,
    remove: deleteCategory,
}