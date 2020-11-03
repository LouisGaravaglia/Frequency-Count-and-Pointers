// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// Constraints

// Time Complexity - O(N + M)

function sameFrequency(num1, num2) {

  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str2.length !== str1.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let char of str1) {
    obj1[char] = (obj1[char] + 1) || 1;
  }

  for (let char of str2) {
    obj2[char] = (obj2[char] + 1) || 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
