const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameSApi = require('./gstatapi.js')
const gameSUi = require('./gstatui.js')

// console.log('games js up and running')

const getUserStats = function () {
  gameSApi.read()
  .then(gameSUi.readGameSuccess)
  .catch(gameSUi.readGameFailure)
}

const gameCreate = function () {
  gameSApi.create()
  .then(gameSUi.newGameSuccess)
  .catch(gameSUi.newGameFailure)
}

const gameUpdate = function (updatedGame, updatedID) {
  gameSApi.update(updatedGame, updatedID)
  .then(gameSUi.updateGameSuccess)
  .catch(gameSUi.updateGameFailure)
}

module.exports = {
  gameCreate,
  gameUpdate,
  getUserStats
}
