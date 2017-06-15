const fetch = require('node-fetch');

const getPerson = async (id) => {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  return await response.json();
};

// IIFE - Immediately-Invoked Function Expression
(async () => {
  const person = await getPerson(1);
  console.log(person.name);
})();
