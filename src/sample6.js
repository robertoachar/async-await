const fetch = require('node-fetch');

async function getPerson(id) {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  return await response.json();
}

// not found
getPerson(0)
  .then(person => console.log(person));
