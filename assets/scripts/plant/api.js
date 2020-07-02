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

const plantRemove = function (plantId) {
  return $.ajax({
    url: config.apiUrl + '/plants/' + plantId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const plantUpdate = function (data, plantId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/plants/' + plantId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      plant: {
        commonName: data.plant.commonName,
        speciesName: data.plant.speciesName,
        nickName: data.plant.nickName,
        waterReq: data.plant.waterReq,
        sunReq: data.plant.sunReq,
        soilReq: data.plant.soilReq
      }
    }
  })
}

module.exports = {
  plantIndex: plantIndex,
  plantCreate: plantCreate,
  plantUpdate: plantUpdate,
  plantRemove: plantRemove
}
