const Model = require('./model')

function addProvider(provider) {
    const providers = Model(provider)
    providers.save();
}

async function getProviders() {
    const providers = await Model.find();
    return providers;
}

module.exports = {
    add: addProvider,
    list: getProviders
}