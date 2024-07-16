const isPalindromes = (word) => {
  let reverse = word.split("").reverse().join("");
  if (reverse === word) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindromes("abba"));
