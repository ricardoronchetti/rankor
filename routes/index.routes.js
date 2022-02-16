const router = require("express").Router()
const User = require('../models/User.model')

router.get("/", (req, res, next) => {
    User
        .find()
        .then(user => res.render('index', { user }))
        .catch(err => console.log(err))
})

module.exports = router