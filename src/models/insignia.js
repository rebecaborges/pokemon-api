
const Insignias = (sequelize, DataTypes) => {
  const model = sequelize.define('Insignia', {
    name: DataTypes.STRING,
  }, {
    tableName: 'Insignias',
    createdAt: false,
    updatedAt: false,
  })

  return model
}

module.exports = Insignias
