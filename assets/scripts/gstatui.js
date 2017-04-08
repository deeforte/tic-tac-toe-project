'use strict'
require('./index')
const store = require('./store')

const readGameSuccess = (stats) => {
//  console.log('read game success ran data is ', stats)
  store.stats = stats
//  console.log(store.stats)
//  console.log(store.stats.games.length)
  $('h5').text(store.user.email + ' has played ' + store.stats.games.length + ' games before this login')
}

const readGameFailure = (game) => {
//  console.log('read bombed')
}

const newGameSuccess = (game) => {
//  console.log('new game success ran data is ', game)
  store.game = game
//  console.log(game.game.id)
//  $('h5').text(store.user.email + ' is playing game ' + game.game.id)
//  console.log(store.game)
}

const newGameFailure = (game) => {
//  console.log('create bombed')
}

const updateGameSuccess = (game) => {
//  console.log('update game success ran data is ', game)
//  console.log(store.game)
}

const updateGameFailure = (game) => {
  console.log('update bombed')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  readGameSuccess,
  readGameFailure
}
