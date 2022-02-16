module.exports = app => {
  // Index routes
  const indexRouter = require('./index.routes')
  app.use('/', indexRouter)

  // API routes
  const apiRoutes = require('../routes/api.routes')
  app.use('/', apiRoutes)

  // Auth routes
  const authRouter = require('./auth.routes')
  app.use('/', authRouter)

  // Game routes
  // const gameRoutes = require('../routes/game.routes')
  // app.use('/games', gameRoutes)

  // Review routes
  // const reviewRoutes = require('./review.routes')
  // app.use('/reviews', reviewRoutes)

  // User routes
  const userRoutes = require('./user.routes')
  app.use('/', userRoutes)
}