const dotenv = require('dotenv') // use environment variables to save sesitive data like database password
dotenv.config({path:__dirname+"/../.env.development.local"})


const config = {
	database: process.env.DB_NAME,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST, // database host (change to 'db' if your connection its between docker containers or to 'localhost' if you use local machine)
	charset: 'utf8',
	dialect: process.env.DB_DBMS_NAME, // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
	/*
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false // to use SSL protocol (in production)
		}
	}
	*/
	port: process.env.DB_PORT,
	define: {
		underscored: true, // underscored name of fields
		timestamps: true, // to created_at and updated_at
		freezeTableName: false // not set table names on plural
	}
}


module.exports = config
