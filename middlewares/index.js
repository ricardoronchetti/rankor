module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.session.currentUser) {
            next()
        } else {
            res.render('auth/login', {
                errorMsg: 'Debes logearte para ver esta página.',
            })
        }
    },

    checkRoles:
        (...roles) =>
            (req, res, next) => {
                roles.includes(req.session.currentUser.role)
                    ? next()
                    : res.render('auth/login', {
                        errorMsg: "No tienes permiso para ver esta página.",
                    })
            },

    isUserOrAdmin: (req, res, next) => {
        if (
            req.session.currentUser._id === req.params.id ||
            req.session.currentUser.role === 'ADMIN'
        ) {
            next()
        } else {
            res.render('auth/login', {
                errorMsg: "No tienes permiso para ver esta página.",
            })
        }
    },
}