const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameSApi = require('./gstatapi.js')
const gameSUi = require('./gstatui.js')

console.log('games js up and running')

const gameStats = {
  'game': {
    'id': 0,
    'cells': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    'over': false,
    'player_x': {
      'id': 3,
      'email': 'and@and.com'
    },
    'player_o': null
  }
}

const getUserStats = function () {
 }

const gameCreate = function () {
//  event.preventDefault()
  const data = gameStats
  const currentGame = data.game
  gameSApi.create(data)
  console.log('create game ran', currentGame)
}
// if (game.title !== 0) {
//    booksApi.create(data)
//     .then(booksUi.onSuccessNoContent)
//    .catch(booksUi.onError)
//    } else {
//         console.log('Please provide a book id!')
//  }
//}

// const gameUpdate = function () {
// }

module.exports = {
  gameCreate
}
