require("dotenv/config");
require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);

const projectName = "rankor";

app.locals.title = "Rankor: The Gamer's Ranking Social Network";

require('./routes')(app)

require("./error-handling")(app);

module.exports = app;