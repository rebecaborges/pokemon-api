const request = require('request-promise')
const { models } = require('../database')
const { CustomError } = require('../helpers/error')

const getPokemons = async (req, res, next) => {
  try {
    const pokemons = await models.Pokemons.findAll()
    if (!pokemons) {
      throw new CustomError({ statusCode: 404, message: 'Não existem pokemons salvos!' })
    }

    res.json(pokemons)
  } catch (error) {
    next(error)
  }
}

const createPokemons = async (req, res, next) => {
  try {
    const pokemon = await models.Pokemons.findOne({
      where: {
        name: req.body.name,
      },
    })

    if (pokemon === null) {
      const pokeNull = await models.Pokemons.create(req.body)
      return res.json({ message: `Pokemon ${pokeNull.name} criado!` })
    }

    await pokemon.update({
      stock: pokemon.stock + req.body.stock,
    })

    return res.json({ message: `Pokemon ${pokemon.name}, atualizado! Estoque atual: ${pokemon.stock}` })
  } catch (error) {
    return next(error)
  }
}

const buyPokemons = async (req, res, next) => {
  try {
    const pokemons = await models.Pokemons.findOne({
      where: {
        name: req.body.name,
      },
    })

    if (pokemons === null) {
      throw new CustomError({ statusCode: 404, message: 'Pokemon não encontrado!', type: 'not found' })
    }

    if (pokemons.stock < req.body.quantity) {
      throw new CustomError({ statusCode: 400, message: `Not enought ${pokemons.name} in stock: ${pokemons.stock}` })
    }

    const body = await request({
      uri: 'https://api.pagar.me/1/transactions',
      method: 'POST',
      json: {
        api_key: process.env.API_KEY,
        amount: pokemons.price * req.body.quantity * 100,
        card_number: '4024007138010896',
        card_expiration_date: '1050',
        card_holder_name: 'Ash Ketchum',
        card_cvv: '123',
        customer: {
          external_id: '#3311',
          name: 'Morpheus Fishburne',
          type: 'individual',
          country: 'br',
          email: 'mopheus@nabucodonozor.com',
          documents: [
            {
              type: 'cpf',
              number: '30621143049',
            },
          ],
          phone_numbers: ['+5511999998888', '+5511888889999'],
        },
        metadata: {
          product: 'pokemons',
          name: pokemons.name,
          quantity: req.body.quantity,
        },
        billing: {
          name: 'Trinity Moss',
          address: {
            country: 'br',
            state: 'sp',
            city: 'Cotia',
            neighborhood: 'Rio Cotia',
            street: 'Rua Matrix',
            street_number: '9999',
            zipcode: '06714360',
          },
        },
        items: [{
          id: 'r123',
          title: 'Red pill',
          unit_price: 10000,
          quantity: 1,
          tangible: true,
        }],

      },
    })

    if (body.status === 'paid') {
      pokemons.stock -= req.body.quantity
      await pokemons.save()
    }

    res.json({ message: `Pokemon ${pokemons.name}, comprado! Estoque atual: ${pokemons.stock}.` })
  } catch (error) {
    next(error)
  }
}

const deletePokemons = async (req, res, next) => {
  try {
    const pokemon = await models.Pokemons.destroy({
      where: {
        name: req.body.name,
      },
    })

    if (!pokemon) {
      throw new CustomError({ statusCode: 404, message: 'Não existe nenhum pokémon com esse nome na base de dados!', type: 'Not found' })
    }

    res.json({ message: 'Pokemon deletado!' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getPokemons,
  createPokemons,
  buyPokemons,
  deletePokemons,
}
