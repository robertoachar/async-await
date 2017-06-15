const fetch = require('node-fetch');

// Class
class StarWars {
  async getPerson(id) {
    const response = await fetch(`http://swapi.co/api/people/${id}`);
    return await response.json();
  }
}

// IIFE - Immediately-Invoked Function Expression
(async () => {
  const sw = new StarWars();
  const person = await sw.getPerson(1);
  console.log(person.name);
})();
