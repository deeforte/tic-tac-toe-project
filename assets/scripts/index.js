'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
console.log('up and runnning index')

const authEvents = require('./events.js')
let squaresInPlay = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

const usersOnLine = require('./store')
let numClicks = 0
let numGames = 0
let xGames = 0
let oGames = 0
let winner = 'not yet'
let winMatch = 'not yet'

// put on click function here

// add check for win here
const checkForWin = function () {
  console.log('I made it to checkForWin function', squaresInPlay)
  if ((squaresInPlay[0] === squaresInPlay[1]) && (squaresInPlay[1] === squaresInPlay[2])) {
    winner = squaresInPlay[0]
    winMatch = 'top row'
    weGotAWinner(winner, winMatch)
  } else if ((squaresInPlay[0] === squaresInPlay[3]) && (squaresInPlay[3] === squaresInPlay[6])) {
    winner = squaresInPlay[0]
    winMatch = 'left column'
    weGotAWinner(winner, winMatch)
  } else if ((squaresInPlay[1] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[7])) {
    winner = squaresInPlay[1]
    winMatch = 'center column'
    weGotAWinner(winner, winMatch)
  } else if ((squaresInPlay[2] === squaresInPlay[5]) && (squaresInPlay[5] === squaresInPlay[8])) {
    winner = squaresInPlay[2]
    winMatch = 'right column'
    weGotAWinner(winner, winMatch)
  } else if ((squaresInPlay[6] === squaresInPlay[7]) && (squaresInPlay[7] === squaresInPlay[8])) {
    winner = squaresInPlay[6]
    winMatch = 'bottom row'
    weGotAWinner(winner, winMatch)
  } else if ((squaresInPlay[3] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[5])) {
    winner = squaresInPlay[3]
    winMatch = 'center row'
    weGotAWinner(winner, winMatch)
  } else if ((squaresInPlay[0] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[8])) {
    winner = squaresInPlay[0]
    winMatch = 'diagonal left to right'
    weGotAWinner(winner, winMatch)
  } else if ((squaresInPlay[2] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[6])) {
    console.log(squaresInPlay[2], 'WINS! - diagRtoL')
    winner = squaresInPlay[2]
    winMatch = 'diagonal right to left'
    weGotAWinner(winner, winMatch)
  }
}

const weGotAWinner = function (whoWon, match) {
  numGames = numGames + 1
  if (whoWon === 'X') {
    xGames = xGames + 1
  } else if (whoWon === 'O') {
    oGames = oGames + 1
  }
  alert('We Got A Winner. Congrats Player ' + whoWon + ' matched 3 on ' + match + '.' +
        '  The score is - Player-X won ' + xGames + '. Player-O won ' + oGames + '.' +
        '  Click new game to play again.')
}

const playAgain = function () {
  numClicks = 0
  winner = 'not yet'
  winMatch = 'not yet'
  squaresInPlay = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
//  $('img').on('click')
//  $('.square').on('click')
//  $('img').bind('click')
//  $('.square').bind('click')
  document.getElementsByClassName('.square').onclick = false
  document.getElementsByClassName('.square').onclick = true
  for (let i = 0; i < squaresInPlay.length; i++) {
    document.getElementsByTagName('img')[i].src = 'assets/images/blank.png'
//    document.getElementsByTagName('img')[i].onclick = true
    console.log('Im in playAgain for loop')
  }
}

const fillSqInPlay = function () {
  if (winner !== 'not yet') {
    alert('Click new game to play again.')
    return
  }
  // if (usersOnline.user.email === false) {
  //  alert('Please sign in below to begin play.')
  // }
  console.log('users=', usersOnLine)
  //  if (usersOnLine.user.email !=== "deeforte@email.com") {
  //  console.log('Please sign in')
  //  return
  // }
  console.log(usersOnLine.user.email)
//  console.log('store=', store)
//  console.log('data=', data)
  const gridNum = this.id
  if ((squaresInPlay[gridNum] === 'X') || (squaresInPlay[gridNum] === 'O')) {
    alert('Click another square')
    return
  }
  numClicks = numClicks + 1
  console.log('clicked on a square', gridNum, 'number of clicks', numClicks)
  if (numClicks % 2 === 0) {
    squaresInPlay[gridNum] = 'O'
    this.setAttribute('src', 'assets/images/blueO.png')
  } else {
    squaresInPlay[gridNum] = 'X'
    this.setAttribute('src', 'assets/images/redX.png')
  }
  if (numClicks > 0) {
    checkForWin(squaresInPlay)
  }
}

$(() => {
  setAPIOrigin(location, config)
  $('.gameBoard').children('').children('').children('').on('click', fillSqInPlay)
  authEvents.addHandlers()
  $('.new-game').on('click', playAgain)
})
module.exports = usersOnLine

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
