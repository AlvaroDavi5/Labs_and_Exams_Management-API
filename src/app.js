const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
// remove this line or change to .env.production when in production
const routes = require("./routes.js")


console.log(`Started application on port ${process.env.APP_PORT}!`)
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (routes(app)) {
	console.log("routes loaded")
}

app.listen(process.env.PORT) // change APP_PORT to PORT in production
