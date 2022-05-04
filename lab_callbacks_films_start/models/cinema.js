const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {

  const result = this.films.map((title) => {
      return title
  })

  return result;
};

Cinema.prototype.getFilmByTitle = function (title) {
  return this.films.find(film => film.title == title)
};

Cinema.prototype.getFilmByGenre = function (genre) {

  return this.films.filter(film => film.genre == genre)

};

Cinema.prototype.getFilmByYear = function (year) {
  return this.films.filter(film => film.year == year)
};

Cinema.prototype.doesYearHaveFilms = function (year) {
  return this.films.some(film => film.year > year)
};

Cinema.prototype.getFilmsLongerThan = function (minutes) {
  return this.films.filter(film => film.length > minutes)
};

Cinema.prototype.sumRunTime = function () {
  const total = this.films.reduce((runningTotal, minutes) => { 
      return runningTotal + minutes
  }, 0);

};

module.exports = Cinema;