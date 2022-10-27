const userInput = window.prompt('enter a sentence you want to encrypt.')

function firstLast(userInput) {
  const letters = userInput.charAt(0) + userInput.charAt(userInput.length -1);
  const capLetters = letters.toUpperCase();
  return capLetters;
}

function lastFirst(capLetters) {
  const reversedLetters = capLetters.charAt(1) + capLetters.charAt(0);
  return reversedLetters;
}

window.alert(lastFirst(firstLast(userInput)));