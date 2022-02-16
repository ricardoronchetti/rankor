const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../models/User.model')
const Game = require('../models/Game.model')

const { isAdmin, isUser } = require('../utils')
const { isLoggedIn, checkRoles, isUserOrAdmin } = require('../middlewares')

const API_KEY = process.env.API_KEY

const APIHandler = require('../services/games-api-handler')
const gamesAPI = new APIHandler()


//Search
router.get('/api/search', isLoggedIn, checkRoles('ADMIN', 'USER'), (req, res) => {
    const { query } = req.body

    axios
        .get(
            `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`
        )
        .then(game => {
            res.send(req.body)
            //res.render('search/search', { game })
        })
        .catch((err) => console.log(err))
})

//Details
router.get('/api/search/:id', isLoggedIn, checkRoles('ADMIN', 'USER'), (req, res) => {
    const { id } = req.params

    axios
        .get(
            `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        )
        .then(game => {
            res.send(req.body)
            //res.render('search/search', { game })
        })
        .catch((err) => console.log(err))
})

//Genre Details
router.get('/api/search/genre/:id', isLoggedIn, checkRoles('ADMIN', 'USER'), (req, res) => {
    const { id } = req.params

    gamesAPI
        .getbyGenre(id)
        // axios
        //     .get(
        //         `https://api.rawg.io/api/games?key=${API_KEY}&genres=${id}`
        //     )
        .then(game => {
            //res.send(game.data)
            res.render('search/search', { game: game.data.results })
        })
        .catch((err) => console.log(err))
})


module.exports = router