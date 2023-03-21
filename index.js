function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
    1.Define the isPalindrome function that accepts a string argument word.
    2.Create an empty string variable named reversedWord.
    3.Loop through each character in word, starting from the end and going backwards.
    4.For each character, append it to the reversedWord variable.
    5.Compare word with reversedWord using the === operator.
    6.If they are equal, return true, indicating that the word is a palindrome. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  The isPalindrome function checks if a given word is a palindrome or not. It does this by looping through each character in the word from the end and appending each character to an empty string variable named reversedWord. This effectively reverses the order of the characters in the word. Once the reversedWord variable has been constructed, the function checks if word is equal to reversedWord using the === operator. If the two are equal, the word is a palindrome and the function returns true. Otherwise, the word is not a palindrome and the function returns false.

Note: This solution is slightly less efficient than the previous solutions as it requires looping through each character in the word, whereas the previous solutions simply reverse the string using built-in methods. However, it is still a valid and correct solution.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
