const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    cinema.getFilmTitles()
    const actual = films;
    assert.deepStrictEqual(actual, [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting])
  });

  it('should be able to find a film by title', function () {
    assert.deepStrictEqual(cinema.getFilmByTitle('Blade Runner 2049'), bladeRunner)
  });

  it('should be able to filter films by genre', function () {
    assert.deepStrictEqual(cinema.getFilmByGenre('sci-fi'), [bladeRunner]) 
  });

  it('should be able to check whether there are some films from a particular year', function () {
    assert.deepStrictEqual(cinema.getFilmByYear(2016), [moonlight]);
  });

  it('should be able to check whether there are some films from a particular year boolean', function () {
    assert.deepStrictEqual(cinema.doesYearHaveFilms(2016), true);
  });


  it('should be able to check whether all films are over a particular length', function () {
    assert.deepStrictEqual(cinema.getFilmsLongerThan(1), [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting]);
  });

  it('should be able to calculate total running time of all films', function () {
    assert.strictEqual(cinema.sumRunTime(1), 622);
  });

});
