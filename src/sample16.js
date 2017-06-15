const StarWars = require('./star-wars');

async function loadData() {
  const sw = new StarWars();

  const personPromise = sw.getPerson(1);
  const filmPromise = sw.getFilm(1);

  const person = await personPromise;
  const film = await filmPromise;

  console.log(person.name);
  console.log(film.title);
}

loadData();
