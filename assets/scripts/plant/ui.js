'use strict'

const showPlantsTemplate = require('../templates/plant-listing.handlebars')
const store = require('./../store')

const indexSuccess = function (data) {
  console.log(data)
  store.plants = data.plants
  const showPlantsHtml = showPlantsTemplate({plants: data.plants})
  $('.content').append(showPlantsHtml)
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

module.exports = {
  indexSuccess: indexSuccess,
  indexFailure: indexFailure,
  plantCreateSuccess: plantCreateSuccess,
  plantCreateFailure: plantCreateFailure
}
