function isPalindrome(word) {
  // Reverse the input string
  const reversedWord = word.split('').reverse().join('');
  
  // Check if the reversed string is the same as the original
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Convert the word into an array of characters.
  2. Reverse the array.
  3. Join the array back into a string.
  4. Compare the reversed string with the original word.
  5. Return true if they are the same, otherwise return false.
*/

// Explanation:
// The function splits the word into an array of characters, reverses that array,
// joins it back into a string, and compares it with the original word. 
// If both are the same, it means the word is a palindrome and we return true. Otherwise, false.

// Custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
