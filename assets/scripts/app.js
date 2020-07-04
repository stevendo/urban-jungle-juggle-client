'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const plantEvents = require('./plant/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('click', authEvents.onSignOut)

  $('.indexPlants').on('click', plantEvents.onPlantIndex)
  $('#create-plant').on('submit', plantEvents.onPlantCreate)
  $('.content').on('submit', '.update-plant-form', plantEvents.onPlantUpdate)
  $('.content').on('click', '.remove-plant', plantEvents.onPlantRemove)
})
