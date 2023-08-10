const {Sequelize} = require('sequelize')
require('dotenv').config()

let sequelize;
// depending on our deployment to heroku, we will use local server database or their jawsdb
if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL)
}else {
    sequelize = new Sequelize(
        // make sure you have your configuration saved in .env
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: '3306'
        }
    )

}

module.exports = sequelize;