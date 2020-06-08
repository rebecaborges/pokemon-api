
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Insignias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },
  async down (queryInterface) {
    await queryInterface.dropTable('Insignias')
  },
}
