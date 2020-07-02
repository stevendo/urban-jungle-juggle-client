'use strict'

const showPlantsTemplate = require('../templates/plant-listing.handlebars')
const store = require('./../store')

const indexSuccess = function (data) {
  store.plants = data.plants
  const showPlantsHtml = showPlantsTemplate({plants: data.plants})
  $('.content').append(showPlantsHtml)
  $('#content').show()

  $('#message').text('Plant Indexed successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
}

const indexFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Index Failed')
  $('#message').show().removeClass().addClass('failure')
}

const plantCreateSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Plant created successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
}

const plantCreateFailure = function () {
  $('form').trigger('reset')

  $('#message').text('Plant Create Failed')
  $('#message').show().removeClass().addClass('failure')
}

const plantUpdateSuccess = function (responseData) {
  $('form').trigger('reset')
  $('#message').text('Plant Updated!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
}

const plantUpdateFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Plant Update Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

const plantRemoveSuccess = function (plantId) {
  $('#message').text('Plant removed successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  $(`[data-id="${plantId}"]`).remove()
  console.log('what is plantId', plantId)
}

const plantRemoveFailure = function () {
  $('#message').text('Plant Remove Failed')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  indexSuccess: indexSuccess,
  indexFailure: indexFailure,
  plantCreateSuccess: plantCreateSuccess,
  plantCreateFailure: plantCreateFailure,
  plantUpdateSuccess: plantUpdateSuccess,
  plantUpdateFailure: plantUpdateFailure,
  plantRemoveSuccess: plantRemoveSuccess,
  plantRemoveFailure: plantRemoveFailure
}
