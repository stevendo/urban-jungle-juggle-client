'use strict'
const config = require('./../config')
const store = require('./../store')

const plantIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/plants',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const plantCreate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/plants',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      plant: {
        commonName: formData.plant.commonName,
        speciesName: formData.plant.speciesName,
        nickName: formData.plant.nickName,
        waterReq: formData.plant.waterReq,
        sunReq: formData.plant.sunReq,
        soilReq: formData.plant.soilReq
      }
    }
  })
}

module.exports = {
  plantIndex: plantIndex,
  plantCreate: plantCreate
}
