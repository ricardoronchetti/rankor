const router = require("express").Router()
const Review = require('../models/Review.model')
const User = require('../models/User.model');
const Game = require('../models/Game.model');

const { isAdmin, isUser } = require('../utils')
const { isLoggedIn, checkRoles, isUserOrAdmin } = require('../middlewares') 

router.get('/', isLoggedIn, checkRoles('USER', 'ADMIN'), (req, res) => {
    const currentUser = req.session.currentUser
    Review
        .find()
        .populate('game')
        .populate('user')
        .then((reviews) => {
            res.render('reviews/review', { reviews, isUserOrAdmin: currentUser.role === 'ADMIN' || currentUser?._id === reviews.user?._id
            })
        })
        .catch((err) => console.log(err))
})


module.exports = router