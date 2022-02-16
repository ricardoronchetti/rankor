const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const fileUploader = require('../config/cloudinary.config')


const { isAdmin, isUser } = require('../utils')
const { isLoggedIn, checkRoles, isUserOrAdmin } = require('../middlewares')

router.get('/user', isLoggedIn, (req, res, next) => {
    User
        .find()
        .then(user => res.render('users/user-details', { user }))
        .catch(err => console.log(err))
})

router.get('/user/create', (req, res, next) => res.render('layout'))

router.post('/user/create', (req, res, next) => {
    const { username, password, name, description, avatar, skills, role, playedGames, friends } = req.body
    User
        .create({ username, password, name, description, avatar, skills, role, playedGames, friends })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

router.get('/user/:id', (req, res, next) => {
    const { id } = req.params
    User
        .findById(id)
        .then(user => res.render('users/user-details', user))
        .catch(err => console.log(err))
})

router.get('/user/:id/edit', isLoggedIn, checkRoles('USER', 'ADMIN'), isUserOrAdmin, (req, res, next) => {
    const { id } = req.params
    User
        .findById(id)
        .then(user => res.render('users/user-edit', user))
        .catch(err => console.log(err))
})

router.post('/user/:id/edit', isLoggedIn, checkRoles('USER', 'ADMIN'), isUserOrAdmin, fileUploader.single('avatar'), (req, res, next) => {
    const { id } = req.params
    const { username, password, name, description, avatar, skills, role, playedGames, friends } = req.body
    User
        .findByIdAndUpdate(id, { username, password, name, description, avatar: req.file.path, skills, role, playedGames, friends }, { new: true })
        .then(() => res.redirect(`/user/${id}`))
        .catch(err => console.log(err))
})

router.post('/user/:id/delete', isLoggedIn, checkRoles('USER', 'ADMIN'), (req, res, next) => {
    const { id } = req.params
    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})



module.exports = router