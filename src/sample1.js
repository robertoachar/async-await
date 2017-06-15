const fetch = require('node-fetch');

function getPerson(id) {
  fetch(`http://swapi.co/api/people/${id}`)
    .then(response => response.json())
    .then(person => console.log(person.name));
}

getPerson(1);
