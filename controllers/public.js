const firstNames = require('../constants/firstNames');
const adjectives = require('../constants/adjectives');
const animals = require('../constants/animals');
const things = require('../constants/things');
const pronouns = require('../constants/pronouns');
const countries = require('../constants/countries');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

exports.getBio = (req, res, next) => {
  

  let n1 = firstNames[getRandomInt(0, firstNames.length)];
  let n2 = firstNames[getRandomInt(0, firstNames.length)];
  let country1 = countries.reverse()[getRandomInt(0, countries.length)].name;
  let country2 = countries.reverse()[getRandomInt(0, countries.length)].name;
  let child = getRandomInt(0, 2) == 1 ? "good" : "bad";
    let a = getRandomInt(18, 70); // age
    let w = getRandomInt(45, 180); // weight
    let h = getRandomInt(140, 200); // height
    let a1 = adjectives[getRandomInt(0, adjectives.length)];
    let a2 = adjectives[getRandomInt(0, adjectives.length)];
    let t1 = things[getRandomInt(0, things.length)];
    let t2 = things[getRandomInt(0, things.length)];

    let animal = animals[getRandomInt(0, animals.length)];
    let anim = getRandomInt(0, 2) == 1 ? "love" : "hate";

//    const bio = "Standing " + h + "cm tall and weighing " + w + "kg, " + n1 + " " + n2 + " is " + a + " years old, " + a1 + ", and " + a2 + ". They enjoy " + t1 + " and " + t2 + ", and had a " + child + " childhood. " + n1 + " " + anim + " " + animal + ".";
  const bio = n1 + " " + n2 + " grew up in " + country1 + " and currently lives in " + country2 + ". They are " + a + " years old, " + h + "cm tall, and weighs " + w + "kg. " + n1 + " is " + a1 + " and " + a2 + ", and had a " + child + " childhood. Their favourite things are " + t1 + " and " + t2 + ", and they " + anim + " " + animal + ".";

      res.send({
        bio: bio,
        firstName: n1,
        lastName: n2,
        country1: country1,
        country2: country2,
        childhood: child,
        age: a,
        height: h,
        weight: w,
        adjective1: a1,
        adjective2: a2,
        thing1: t1,
        thing2: t2,
        feelings: anim,
        animals: animal
      });
};
