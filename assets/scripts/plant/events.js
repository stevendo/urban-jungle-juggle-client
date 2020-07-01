'use strict'

const api = require('./api')
const ui = require('./ui')

const onPlantIndex = function (event) {
  event.preventDefault()

  api.plantIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

module.exports = {
  onPlantIndex: onPlantIndex
}
