const fetch = require('node-fetch');

async function getPerson(id) {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.detail);
  }

  return body;
}

async function loadPerson(id) {
  try {
    const person = await getPerson(id);
    console.log(person.name);
  } catch (err) {
    console.error(err.message);
  }
}

loadPerson(0);
loadPerson(1);
