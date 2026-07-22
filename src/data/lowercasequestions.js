const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const lowercaseQuestions = alphabet.map((letter) => ({
  target: letter,
  answer: letter,
}));