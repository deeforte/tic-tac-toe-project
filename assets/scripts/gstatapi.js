'use strict'

const config = require('./config')
const store = require('./store')

const create = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    data: data
  })
}
module.exports = {
  create
}
