const { models } = require('../database')
const { CustomError } = require('../helpers/error')

const getInsignias = async (req, res, next) => {
  try {
    const insignia = await models.Insignias.findAll({ raw: true })

    if (!insignia) {
      throw new CustomError({ statusCode: 404, message: 'Não existem insignias no banco de dados!', type: 'Not found' })
    }

    res.json(insignia)
  } catch (error) {
    next(error)
  }
}

// eslint-disable-next-line consistent-return
const createInsignias = async (req, res, next) => {
  try {
    const insignia = await models.Insignias.findOne({
      where: {
        name: req.body.name,
      },
    })

    if (insignia === null) {
      const insigniaCreate = await models.Insignias.create(req.body)
      return res.json({ message: `Insignia ${insigniaCreate.name} criada!` })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getInsignias,
  createInsignias,
}
