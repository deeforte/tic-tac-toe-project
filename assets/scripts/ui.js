'use strict'
require('./index')

const store = require('./store')
const gameEvents = require('./games.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').hide()
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signin success ran data is ', data)
  store.user = data.user
  $('h2').text('')
  $('h4').text('Scoreboard: no games played since signin')
  $('h5').text(store.user.email)
  $('.signinForms').hide()
  $('.signoutForms').css('visibility', 'visible')
  $('.gameBoard').css('visibility', 'visible')
  // gameEvents.getUserStats()
  // console.log(store.games)
  // console.log(store)
  gameEvents.getUserStats()
  let newUser = true
  gameEvents.gameCreate()
  console.log(store)
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  console.log('signout success ran data is ', data)
  console.log('store before set to null ', store)
  store.user = null
  for (let i = 0; i < 9; i++) {
    document.getElementsByTagName('img')[i].src = 'http://i.imgur.com/54nuKyt.png'
  }
  $('.signinForms').show()
  $('.signoutForms').css('visibility', 'hidden')
  $('.sign-in').css('visibility', 'visible')
  $('.gameBoard').css('visibility', 'hidden')
  $('h2').text('Signin to begin play')
  $('h3').text('')
  $('h3').text('')
  $('h5').text('')
  console.log('store after set to null ', store)
}

const signOutFailure = (error) => {
  console.error('signout failure ran error is ', error)
}

const chgPswdSuccess = (data) => {
  console.log(data)
}

const chgPswdFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  chgPswdSuccess,
  chgPswdFailure
}
