const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path:__dirname+"/../.env.development.local"})
const routes = require("./routes.js")


console.log(`Started application on port ${process.env.APP_PORT}!`)
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (routes(app)) {
	console.log("routes loaded")
}

app.listen(process.env.APP_PORT)
