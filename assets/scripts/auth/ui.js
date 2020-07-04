'use strict'

const store = require('./../store')
const plant = require('./../plant/events')

$('.index-plants').hide()
$('.sign-out').hide()
$('#change-password').hide()

$('#content').hide()
$('#create-plant').hide()

const createSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Sign up successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')

  $('#status-message').text('Hello!')
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

  // console.log(responseData, 'what is responseData')
  // plant.onPlantIndex() // show plant index on signin

  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.sign-out').show()

  $('#change-password').show()
  $('.index-plants').show()

  $('#create-plant').show()
  $('#content').show()

  $('#status-message').text('Hello!')
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
  $('#message').text('Sign Out Successful!')
  $('#message').show()
  $('#message').removeClass().addClass('success')

  $('#sign-up').show()
  $('#sign-in').show()

  $('.index-plants').hide()
  $('.sign-out').hide()

  $('#change-password').hide()
  $('#create-plant').hide()

  $('#content').hide()

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
