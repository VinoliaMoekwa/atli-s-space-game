const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const questions = alphabet.map((letter) => ({
  target: letter,
  answer: letter,
}));