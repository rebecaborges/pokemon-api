const express = require('express')
const pokemonsRoutes = require('./routes/pokemons')
const insigniasRoutes = require('./routes/insignias')
const { handleError, CustomError } = require('./helpers/error')
const database = require('./database')

const app = express()
app.use(express.json())

const PORT = 3000 || process.env.PORT

app.use('/pokemons', pokemonsRoutes)

app.use('/insignias', insigniasRoutes)

// eslint-disable-next-line no-unused-vars, max-params
app.use((err, req, res, next) => {
  let error = err

  if (!(error instanceof CustomError)) {
    console.log('ORIGINAL-ERROR', error)
    error = new CustomError()
  }
  handleError(error, res)
})

const start = async () => {
  await database.connect()

  app.listen(() => {
    console.log(`Server is running on port ${PORT}`)
  })
}

module.exports = app
start()
