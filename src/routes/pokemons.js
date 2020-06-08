const router = require('express').Router()
const validationMiddleware = require('../helpers/validation')

const {
  getSchema,
  createSchema,
  buySchema,
  deleteSchema,
} = require('../joi')

const {
  getPokemons,
  createPokemons,
  buyPokemons,
  deletePokemons,
} = require('../controllers')

router.get(
  '/',
  getPokemons,
  validationMiddleware(getSchema)
)

router.post(
  '/create',
  validationMiddleware(createSchema),
  createPokemons
)

router.post(
  '/buy',
  validationMiddleware(buySchema),
  buyPokemons
)

router.delete(
  '/delete',
  validationMiddleware(deleteSchema),
  deletePokemons
)

module.exports = router
