const db = require('mongoose')


db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('[Base de dados] connecteda com sucesso')
}).catch((err) => {
    console.log('connection failed,', err)
});
}

module.exports = connect