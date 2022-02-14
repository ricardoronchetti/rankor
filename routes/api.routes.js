const { default: axios } = require('axios')
const User = require('../models/User.model')
const Comic = require('../models/Comic.model')
const {
    isLoggedIn,
    checkRoles,
} = require('./../middlewares')
const router = require('express').Router()

require("dotenv/config");
const API_KEY = process.env.API_KEY

//Search
router.post('/search', (req, res) => {
    const { query } = req.body
    axios
        .get(
            `https://api.rawg.io/api/games?key=API_KEY`
        )
        .then((response) => {
            res.json(response.data.results)
        })
        .catch((err) => console.log(err))
})

module.exports = router