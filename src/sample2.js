const fetch = require('node-fetch');

async function gerPerson(id) {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  const person = await response.json();
  console.log(person.name);
}

gerPerson(1);
