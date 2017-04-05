'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signin success ran data is ', data)
  store.user = data.user
  console.log(store)
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  console.log('signout success ran data is ', data)
  console.log('store before set to null ', store)
  store.user = null
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
