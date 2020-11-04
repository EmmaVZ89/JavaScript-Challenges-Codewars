// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  let regex = /[a-z]/g;
  let letters = {};
  let alphabetLetterCount = 0;
  string = string.toLowerCase().replace(/[\W\d\s_]/g, "").split("");

  for (let letter of string) {
    if (letter in letters) {
      ++letters[letter];
    } else {
      letters[letter] = 1;
      alphabetLetterCount++;
    }
  }

  return alphabetLetterCount === 26;

}
