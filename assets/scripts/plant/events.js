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

module.exports = {
  onPlantIndex: onPlantIndex,
  onPlantCreate: onPlantCreate
}
