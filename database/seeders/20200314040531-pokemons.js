
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Pokemons', [{
      name: 'pikachu',
      price: 200,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'bulbasaur',
      price: 150,
      stock: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'ivysaur',
      price: 90,
      stock: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'charmander',
      price: 170,
      stock: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'charizard',
      price: 150,
      stock: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'eevee',
      price: 150,
      stock: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'pidgey',
      price: 150,
      stock: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Pokemons', null, {})
  },
}
