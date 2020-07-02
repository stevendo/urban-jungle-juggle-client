'use strict'

let apiUrl
const apiUrls = {
  production: 'https://polar-tundra-79343.herokuapp.com/', // from heroku
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
