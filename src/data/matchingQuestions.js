const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const matchingQuestions = alphabet.flatMap((letter) => [
  {
    target: letter,
    answer: letter.toLowerCase(),
  },
  {
    target: letter.toLowerCase(),
    answer: letter,
  },
]);