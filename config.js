const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://joseticnes_user:v51BdAz0BatlU7xR@cluster0.rjqps.mongodb.net/cbaDataBase?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTER || '/app',
    filesRoute:process.env.FILES_ROUTE || 'files'

}

module.exports = config; 

//'mongodb://localhost/dbcba'