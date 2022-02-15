const router = require('express').Router()
const axios = require('axios')
const User = require('../models/User.model')
const Game = require('../models/Game.model')
const {
    isLoggedIn,
    checkRoles,
} = require('./../middlewares')

//Search
router.post('/search', isLoggedIn, checkRoles('ADMIN', 'USER'), (req, res) => {
    const { query } = req.body

    axios
        .get(
            `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`
        )
        .then((response) => {
            res.json(response.data.results)
        })
        .catch((err) => console.log(err))
})

//Details
router.get('/search/:id', isLoggedIn, checkRoles('ADMIN', 'USER'), (req, res) => {
    const { id } = req.params

    axios
        .get(
            `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        )
        .then((game) => {
            res.render('games/game-details', { game })
        })
        .catch((err) => console.log(err))
})


module.exports = router