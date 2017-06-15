const StarWars = require('./star-wars');

async function loadData() {
  const sw = new StarWars();

  const [person, film] = await Promise.all([sw.getPerson(1), sw.getFilm(1)]);

  console.log(person.name);
  console.log(film.title);
}

loadData();
