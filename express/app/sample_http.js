const request = require('request-promise')  
const get_options = {  
  method: 'GET',
  uri: 'https://risingstack.com',
  qs: {
    limit: 10,
    skip: 20,
    sort: 'asc'
  },
  headers: {
    'User-Agent': 'Request-Promise',
    'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l'
  }
}

const post_options = {  
  method: 'POST',
  uri: 'https://risingstack.com/login',
  body: {
    foo: 'bar'
  },
  json: true 
    // JSON stringifies the body automatically
}


request(get_options)  
  .then(function (response) {
    console.log("HTTP REQUEST: SUCCESS\n")
    // Request was successful, use the response object at will
  })
  .catch(function (err) {
    // Something bad happened, handle the error
  })