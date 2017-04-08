'use strict'

const config = require('./config')
const store = require('./store')

const read = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (updatedGame, updatedID) {
//  console.log(updatedID)
//  console.log(store)
//  console.log(updatedGame)
  return $.ajax({
    url: config.apiOrigin + '/games/' + updatedID,
    method: 'PATCH',
    data: updatedGame,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  read,
  create,
  update
}
