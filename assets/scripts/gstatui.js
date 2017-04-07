'use strict'
require('./index')

const onSuccess = function (data) {
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.games) {
    console.log(data.games)
  } else {
    console.table(data.games)
  }
}

const onSuccessNoContent = function () {
  console.log('Your request was successsful and you returned no content')
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError,
  onSuccessNoContent
}
