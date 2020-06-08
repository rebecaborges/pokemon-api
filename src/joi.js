const Joi = require('@hapi/joi')

const getSchema = Joi.object().keys({
  url: Joi.string().uri().required(),
})

const createSchema = Joi.object().keys({
  // params: {
  //   url: Joi.string().uri().required(),
  // },

  name: Joi.string().strict().required(),
  price: Joi.number().integer().strict().required(),
  stock: Joi.number().integer().strict().required(),
})

const buySchema = Joi.object().keys({
  name: Joi.string().strict().required(),
  quantity: Joi.number().integer().strict().required(),
})

const deleteSchema = Joi.object().keys({
  name: Joi.string().strict().required(),
})

module.exports = {
  getSchema,
  createSchema,
  buySchema,
  deleteSchema,
}
