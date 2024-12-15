console.log("Concepts: This file contains learning examples.");

//Arrow function dont have their own this,they refer to lexical scope
//Here, this refers to the global object not the object object
// const obj = {
//   name: "anish",
//   greet: () => {
//     console.log(`hello, ${this.name}`);
//   },
// };

// obj.greet();

// const obj1 = {
//   name: "anish",
//   greet: function () {
//     console.log(`hello, ${this.name}`);
//   },
// };

// obj1.greet();

//------------------------------------------------

// function Person(name) {
//   this.name = name;
// }

// const Person1 = new Person("Anish");
// const Person2 = new Person("Singh");

// console.log(Person1);
// console.log(Person2);

// const Person = (name) => {
//   this.name = name;
// };

// const Person1 = new Person("Anish");
// const Person2 = new Person("Singh");

// console.log(Person1);
// console.log(Person2);

//-------------------------------------------------

//Spread operator is used to spread or expand the elements of an iterable like array
//or string into individual elements.

//1. Concatenating Arrays
//The spread operator allows you to merge arrays easily without using methods like concat.

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4];

// const mergedArr = [...arr1, ...arr2];

// console.log(mergedArr);

//*const allows modifying the contents of an array or object because
//const only prevents reassigning the variable itself,not the values within.

//2. Copying Arrays
// Using the spread operator creates a shallow copy of an array,
// which ensures changes to the new array do not affect the original one.

// const arr2 = [3, 4];

// // const mergedArr = [...arr1, ...arr2];
// const copy = [...arr2];
// copy.push(4);

// console.log(arr2);
// console.log(copy);

//3. Expanding Strings into Characters

// const str = "anish singh";

// const chars = [...str];

// console.log(chars);

//4. Passing Array Elements as Arguments to Functions

// function createExample(ar1, ar2) {
//   console.log(ar1, ar2);
// }

// let arr = [1, 9];
// createExample(...arr);

//5. Merging Objects
//The spread operator works with objects to merge properties into a new object.
//If there are conflicts, properties from later objects overwrite those from earlier ones.

// let obj1 = { name: "John", age: 25 };
// let obj2 = { age: 30, city: "New York" };

// let mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);

//6. Adding New Properties to Objects
//You can use the spread operator to add properties to an existing object
//without mutating it.

// let original = { name: "Anish", age: 29 };

// let updated = { ...original, city: "India" };

// console.log(original);
// console.log(updated);

//7. Removing Properties from Objects
//Although spread alone can’t remove properties, you can combine it with destructuring to exclude properties.

// let original = { name: "Alice", age: 28, city: "Paris" };

// let { city, ...rest } = original;

// console.log(rest);

//----------------------------------------
// What is the Rest Operator in JavaScript?
// The rest operator (...) is used to condense or collect multiple elements into a single array or object. It’s particularly useful in scenarios where:

// You don’t know the exact number of arguments a function will receive.

// You want to handle the "rest" of the properties or arguments dynamically.
// Introduced in ES6, the rest operator simplifies handling of variable numbers of parameters and dynamic property collections.

// Key Use Cases of the Rest Operator
// 1. Handling Variable Function Arguments
// The rest operator is commonly used to capture an unknown number of arguments passed to a function and store them as an array.

// function example(...args) {
//   console.log(args); // `args` is an array containing all arguments
// }
// example(1, 2, 3, 4); // Output: [1, 2, 3, 4]
// Here:

// ...args collects all arguments into a single array called args.
// This is useful for functions that need to handle a dynamic number of arguments (e.g., sum, concatenation).
// 2. Destructuring Arrays
// The rest operator can collect the remaining elements of an array into another array during destructuring.

// Example:

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;

// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]
// Here:
// first gets the first element, second gets the second element, and ...rest collects the remaining elements into a new array.

// 3. Destructuring Objects
// The rest operator can collect the remaining properties of an object into another object during destructuring.

// Example:

// javascript
// Copy code
// const user = { name: "Alice", age: 30, city: "Paris" };
// const { name, ...rest } = user;

// console.log(name); // Output: Alice
// console.log(rest); // Output: { age: 30, city: 'Paris' }
// Here:

// name is extracted as a separate variable.
// ...rest collects the remaining properties (age and city) into a new object.

//------------------------
