'use strict'

const store = require('./../store')
const plant = require('./../plant/events')

$('#sign-out-banner').hide()
$('#sign-out').hide()
$('#change-password-banner').hide()
$('#change-password').hide()
$('#content').hide()
$('#create-plant-section').hide()
$('#get-plants-section').hide()

const createSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Sign up successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  // $('#status-message').text('Hello!')
}

const createFailure = function () {
  $('form').trigger('reset')

  $('#message').text('Sign Up Failed')
  $('#message').show().removeClass().addClass('failure')
}

const signInSuccess = function (responseData) {
  $('form').trigger('reset')
  $('#message').text('Sign in successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  store.user = responseData.user
  // plant.onPlantIndex() // show plant index on signin
  $('#sign-up').hide()
  $('#sign-up-banner').hide()
  $('#sign-in').hide()
  $('#sign-in-banner').hide()
  $('#sign-out').show()
  $('#change-password-banner').show()
  $('#change-password').show()
  $('#get-plants-section').show()
  $('#create-plant-section').show()
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

const changePasswordSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Change Password Successful!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Change Password Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

const signOutSuccess = function (responseData) {
  // $('form').trigger('reset')

  $('#message').text('Sign Out Successful!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  $('#content').hide()
  $('#sign-up').show()
  $('#sign-up-banner').show()
  $('#sign-in').show()
  $('#sign-in-banner').show()
  $('#sign-out-banner').hide()
  $('#sign-out').hide()
  $('#change-password-banner').hide()
  $('#change-password').hide()
  $('#status-message').text('Bye!')
  store.user = null
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign Out Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  createSuccess: createSuccess,
  createFailure: createFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
