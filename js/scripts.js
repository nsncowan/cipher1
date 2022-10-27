const userInput = window.prompt('enter a sentence you want to encrypt.')

function firstLast {
  let letters = userInput.charAt(0) + userInput.charAt(userInput.length -1);
  let capLetters = letters.toUpperCase();
  return capLetters;
}

function lastFirst {
  let reversedLetters = capLetters.charAt(1) + capLetters.charAt(0);
}