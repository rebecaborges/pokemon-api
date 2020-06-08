
const Pokemons = (sequelize, DataTypes) => {
  const model = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
  }, {
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  })
  return model
}

module.exports = Pokemons
