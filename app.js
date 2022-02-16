require("dotenv/config")
require("./db")

const express = require("express")
const hbs = require("hbs")
const app = express()

app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

require("./config")(app)
require("./config/session.config")(app)

const projectName = "rankor"

app.locals.title = "Rankor: The Gamer's Ranking Social Network"
// app.locals.API_KEY = process.env.API_KEY

require('./routes')(app)

require("./error-handling")(app)

module.exports = app