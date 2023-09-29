let names = require('../constants/names.json');
let scrabble = require('../constants/scrabble.json');
let countries = require('../constants/countries.json');
let nouns = require('../constants/nouns.json');

exports.getBio = (req, res, next) => {
  shuffle(names);
  shuffle(nouns)
  let first = names[0];
  let last = names[1];
  let things = [nouns[0], nouns[1]];
  let age = getRandomInt(18, 120);
  let word = scrabble[getRandomInt(0, scrabble.length)];
let country = countries[getRandomInt(0, countries.length)];
  const message = first + " " + last + " is " + age + " years old and lives in " + country + ". " + first + "'s favourite word is \"" + word + ".\" Their two favourite things are " + things[0] + " and " + things[1] + ".";
  res.send(message);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}