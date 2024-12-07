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

Example: document.getElementById("app").innerHTML = `
<h1>JavaScript Playground!</h1>
`;
