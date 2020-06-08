const express = require('express')

const router = express.Router()

const {
  getInsignias,
  createInsignias,
} = require('../controllers')

router.get('/', getInsignias)

router.post(
  '/create',
  createInsignias
)

module.exports = router
