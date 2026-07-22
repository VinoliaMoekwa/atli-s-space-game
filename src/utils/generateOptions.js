const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function generateOptions(correctLetter) {
  const alphabet =
    correctLetter === correctLetter.toUpperCase()
      ? uppercaseAlphabet
      : lowercaseAlphabet;

  const wrongLetters = alphabet.filter(
    (letter) => letter !== correctLetter
  );

  const shuffledWrong = shuffle(wrongLetters);

  const options = [
    correctLetter,
    shuffledWrong[0],
    shuffledWrong[1],
    shuffledWrong[2],
  ];

  return shuffle(options);
}

  //thisi git