const fetch = require('node-fetch');

class StarWars {
  async getPerson(id) {
    const response = await fetch(`http://swapi.co/api/people/${id}`);
    return await response.json();
  }

  async getFilm(id) {
    const response = await fetch(`http://swapi.co/api/films/${id}`);
    return await response.json();
  }
}

module.exports = StarWars;
