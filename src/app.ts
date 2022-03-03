import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:__dirname+"/../.env.development.local"}) // remove this line or change to .env.production when in production
import routes from "./routes"


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (routes(app)) {
	console.log("loaded routes")
}

app.listen(process.env.APP_PORT) // change APP_PORT to PORT in production
console.log(`Started application on port ${process.env.APP_PORT}!`)
