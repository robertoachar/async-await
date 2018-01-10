const fetch = require('node-fetch');

const getPerson = async (id) => {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  return await response.json();
};

const person = await getPerson(1);
console.log(person.name);

// const person = await getPerson(1);
//                ^^^^^
//
// SyntaxError: await is only valid in async function
