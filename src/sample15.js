const StarWars = require('./star-wars');

async function loadData() {
  const sw = new StarWars();

  const person = await sw.getPerson(1);
  const film = await sw.getFilm(1);

  console.log(person.name);
  console.log(film.title);
}

loadData();
