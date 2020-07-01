'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/polar-tundra-79343.git', // from heroku
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
