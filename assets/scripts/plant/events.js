'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

const onPlantIndex = function (event) {
  // event.preventDefault()

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
    .then(() => onPlantIndex(event))
    .catch(ui.plantCreateFailure)
}

const onPlantUpdate = function (event) {
  event.preventDefault()

  const plantId = $(event.target).data('id')

  const form = event.target
  const data = getFormFields(form)

  api.plantUpdate(data, plantId)
    .then(ui.plantUpdateSuccess)
    .then(() => onPlantIndex(event))
    .catch(ui.plantUpdateFailure)
}

const onPlantRemove = function (event) {
  event.preventDefault()

  const plantId = $(event.target).data('id')

  api.plantRemove(plantId)
    .then(() => ui.plantRemoveSuccess(plantId))
    .catch(ui.plantRemoveFailure)
}

module.exports = {
  onPlantIndex: onPlantIndex,
  onPlantCreate: onPlantCreate,
  onPlantUpdate: onPlantUpdate,
  onPlantRemove: onPlantRemove
}
