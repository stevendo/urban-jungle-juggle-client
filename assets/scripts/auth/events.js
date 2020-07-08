'use strict'

const api = require('./api')
const ui = require('./ui')
const plant = require('./../plant/events')

const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.createSuccess)
    .then(() => onSignInAuto(data))
    .catch(ui.createFailure)
}

// This is for regular sign in
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => plant.onPlantIndex(event))
    .catch(ui.signInFailure)
}

// This is for the auto-sign in
// 'data' comes for the onSignUp() above
// big difference exlcusion of event.preventDefault()
const onSignInAuto = function (data) {
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => plant.onPlantIndex(event))
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignInAuto: onSignInAuto,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
