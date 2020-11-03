// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true


function constructNote(message, letters) {

  function makeFrequencyCounter(str) {
    const freqCounter = {};
    for (let char of str) {
      freqCounter[char] = (freqCounter[char] + 1) || 1;
    }
    return freqCounter;
  }

  const messageCounter = makeFrequencyCounter(message);
  const lettersCounter = makeFrequencyCounter(letters);

  for (let char in messageCounter) {
    if (!lettersCounter[char]) return false;
    if (messageCounter[char] > lettersCounter[char]) return false;
  }
  return true;
}
