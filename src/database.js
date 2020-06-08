const {
  forEachObjIndexed,
} = require('ramda')
const Sequelize = require('sequelize')

const models = {}
module.exports.models = models

const sequelizeConfig = {
  localhost: 'postgres',
  database: 'postgres',
  dialect: 'postgres',
  password: 'postgres',
  username: 'postgres',
  logging: true,
}

const sequelize = new Sequelize(sequelizeConfig)

forEachObjIndexed(
  (entity, name) => {
    const model = sequelize.import(name, entity)

    models[name] = model
  },
  require('./models')
)

forEachObjIndexed((entity) => {
  if (entity.associate) {
    entity.associate(models)
  }
}, models)

module.exports.operators = Sequelize.Op
module.exports.sequelize = sequelize
module.exports.connect = () => sequelize.authenticate()
