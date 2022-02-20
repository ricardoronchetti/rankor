module.exports = app => {
  // Index routes
  const indexRouter = require('./index.routes')
  app.use('/', indexRouter)

  // Games routes
  const gamesRoutes = require('../routes/games.routes')
  app.use('/', gamesRoutes)

  // Auth routes
  const authRouter = require('./auth.routes')
  app.use('/', authRouter)

  // User routes
  const userRoutes = require('./user.routes')
  app.use('/', userRoutes)
}