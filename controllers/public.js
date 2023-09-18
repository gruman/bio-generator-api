
exports.getScrambled = (req, res, next) => {
  const words = req.body.input.split(' ');

  // Shuffle the array of words
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }

  // Join the shuffled words back into a string
  const scrambledString = words.join(' ');

  res.send(scrambledString);
}