const fetch = require("node-fetch");

postData('http://stage.admin.prozper.com/api/agents', {page: 2})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = '', data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'client': 'amieres',
            'password': 'Secure2Pass',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: 'page=2', // body data type must match "Content-Type" header
    })
    .then(response => response.text().then( text => console.log(text))); // parses JSON response into native JavaScript objects 
}