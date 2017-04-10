'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

// console.log('up and runnning auth events')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.signUp(data)
    .then(gameUi.signUpSuccess)
    .catch(gameUi.signUpFailure)
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.signIn(data)
    .then(gameUi.signInSuccess, console.log(data, data.credentials.email))
    .catch(gameUi.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
//  console.log('sign out ran')
  gameApi.signOut()
    .then(gameUi.signOutSuccess)
    .catch(gameUi.signOutFailure)
}

const onChgPswd = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
//  console.log('changed password')
  gameApi.chgPswd(data)
    .then(gameUi.chgPswdSuccess)
    .catch(gameUi.chgPswdFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChgPswd)
}

module.exports = {
  addHandlers
}
