'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
console.log('up and runnning index')

const authEvents = require('./events.js')
const squaresInPlay = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

let numClicks = 0
let numGames = 0

// put on click function here

// add check for win here
const checkForWin = function () {
  console.log('I made it to checkForWin function', squaresInPlay)
  if ((squaresInPlay[0] === squaresInPlay[1]) && (squaresInPlay[1] === squaresInPlay[2])) {
    console.log(squaresInPlay[0], 'WINS! - top')
    alert(squaresInPlay[0], 'WINS!')
  } else if ((squaresInPlay[0] === squaresInPlay[3]) && (squaresInPlay[3] === squaresInPlay[6])) {
    console.log(squaresInPlay[0], 'WINS! - left')
  } else if ((squaresInPlay[1] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[7])) {
    console.log(squaresInPlay[1], 'WINS! - centerV')
  } else if ((squaresInPlay[2] === squaresInPlay[5]) && (squaresInPlay[5] === squaresInPlay[8])) {
    console.log(squaresInPlay[2], 'WINS! - right')
  } else if ((squaresInPlay[6] === squaresInPlay[7]) && (squaresInPlay[7] === squaresInPlay[8])) {
    console.log(squaresInPlay[6], 'WINS! - bottom')
  } else if ((squaresInPlay[3] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[5])) {
    console.log(squaresInPlay[3], 'WINS! - centerH')
  } else if ((squaresInPlay[0] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[8])) {
    console.log(squaresInPlay[0], 'WINS! - diagLtoR')
  } else if ((squaresInPlay[2] === squaresInPlay[4]) && (squaresInPlay[4] === squaresInPlay[6])) {
    console.log(squaresInPlay[2], 'WINS! - diagRtoL')
  }
  numGames = numGames + 1
}

const fillSqInPlay = function () {
  const gridNum = this.id
  numClicks = numClicks + 1
  console.log('clicked on a square', gridNum, numClicks)
  if (numClicks % 2 === 0) {
    squaresInPlay[gridNum] = 'O'
    this.setAttribute('src', 'assets/images/blueO.png')
  } else {
    squaresInPlay[gridNum] = 'X'
    this.setAttribute('src', 'assets/images/redX.png')
  }
  if (numClicks > 4) {
    checkForWin(squaresInPlay)
  }
}

$(() => {
  setAPIOrigin(location, config)
  $('.gameBoard').children('').children('').children('').on('click', fillSqInPlay)
  authEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
