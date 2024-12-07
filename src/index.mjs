import "./styles.css";

// Problem 1: Flatten a Deeply Nested Array in JavaScript
// ---------------------------------------------------------
// Problem Statement:
// Write a function `flattenArray` that takes a deeply nested array as input
// and returns a flat array. Do NOT use built-in methods like flat().

// Input: [1, [2, [3, [4, 5]]], 6]
// Output: [1, 2, 3, 4, 5, 6]

// const arr = [1, [2, [3, [4, 5]]], 6, [7, 8]];

// function flattenArray(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const flatten = flattenArray(arr);
// console.log(flatten);

// -------------------------------------------------------------

//Problem Statement:
// Find the first character in a string that does not repeat. If all characters repeat, return null.
// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null

// What is a Hash Map?
// A hash map is a data structure that stores key-value pairs. It allows:

// Fast Lookups: Keys can be accessed in constant time,
// 𝑂(1)
// O(1), in most cases.
// Key-Value Storage: Data is stored as a mapping of a key to a value.

// function firstNonRepeatingChar(str) {
//   const charFrequency = {};

//   for (let char of str) {
//     if (charFrequency[char]) {
//       charFrequency[char]++;
//     } else {
//       charFrequency[char] = 1;
//     }
//   }

//   for (let char of str) {
//     if (charFrequency[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// }
// console.log(firstNonRepeatingChar("aabbcd"));
// console.log(firstNonRepeatingChar("aabbccdd"));
// console.log(firstNonRepeatingChar("abcd"));

// ------------------------------------------------
Example: document.getElementById("app").innerHTML = `
<h1>JavaScript Playground!</h1>
`;
