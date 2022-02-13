const express = require('express')
const bodyParser = require('body-parser')
const routes = require("./routes.js")
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path:__dirname+"/../.env.development.local"})


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (routes(app)) {
	console.log("routes loaded")
}

app.listen(3000)
