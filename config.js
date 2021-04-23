const config = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT,
    host: process.env.HOST,
    publicRoute: process.env.PUBLIC_ROUTER,
    filesRoute:process.env.FILES_ROUTE
}

module.exports = config; 

//'mongodb://localhost/dbcba'
//mongodb+srv://joseticnes_user:v51BdAz0BatlU7xR@cluster0.rjqps.mongodb.net/cbaDataBase?retryWrites=true&w=majority