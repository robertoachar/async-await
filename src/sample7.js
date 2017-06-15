const fetch = require('node-fetch');

async function getPerson(id) {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.detail);
  }

  return body;
}

getPerson(0)
  .then(person => console.log(person.name))
  .catch(err => console.error(err.message));

getPerson(1)
  .then(person => console.log(person.name))
  .catch(err => console.error(err.message));
