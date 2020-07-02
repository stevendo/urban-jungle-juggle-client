'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

const onPlantIndex = function (event) {
  event.preventDefault()

  api.plantIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onPlantCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.plantCreate(data)
    .then(ui.plantCreateSuccess)
    .catch(ui.plantCreateFailure)
}

const onPlantUpdate = function (event) {
  event.preventDefault()

  const plantId = $(event.target).data('id')

  const form = event.target
  const data = getFormFields(form)

  // console.log('what is event', event)
  // console.log('what is data', data)
  // console.log(event.target, 'what is event.target')
  // console.log(event.currentTarget, 'what is currentTarget')
  // console.log(plantId, 'what is plantId')
  // console.log($(event.target).data('id'), 'what is eventtargetdata')

  api.plantUpdate(data, plantId)
    .then(ui.plantUpdateSuccess)
    .catch(ui.plantUpdateFailure)
}

const onPlantRemove = function (event) {
  event.preventDefault()

  const plantId = $(event.target).data('id')

  api.plantRemove(plantId)
    .then(() => ui.plantRemoveSuccess(plantId))
    .catch(ui.plantRemoveFailure)
}

// .then(() => ui.deleteBookSuccess(id))

module.exports = {
  onPlantIndex: onPlantIndex,
  onPlantCreate: onPlantCreate,
  onPlantUpdate: onPlantUpdate,
  onPlantRemove: onPlantRemove
}
