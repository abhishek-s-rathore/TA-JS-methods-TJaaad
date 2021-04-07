// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
let str = "";
strings.forEach((elem) => {
  str += elem + " ";
});
console.log(str);

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");
console.log(strings);

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
let str2 = "";
strings.forEach((elem) => {
  str2 += elem + " ";
});
console.log(str2);

// - Remove the first word in the array (strings)
strings.shift();
console.log(strings);

// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((elem) => elem.includes("is"));
console.log(allIs);

// // - Find all the words that contain 'is' use string method 'indexOf'
let allIs1 = strings.filter((string) => string.indexOf("is") !== -1);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((num) => num % 3 === 0));

// -  Sort Array from smallest to largest
let ascendingNumbers = numbers.sort((a, b) => a - b);
console.log(ascendingNumbers);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
console.log(ascendingNumbers[ascendingNumbers.length - 1]);

// - Find longest string in strings

// let ascendingStrings = strings.sort();
// console.log(ascendingStrings[ascendingStrings.length - 1]);

let longestString = strings.sort((a, b) => a.length - b.length).pop();

// - Find all the even numbers
console.log(numbers.filter((num) => num % 2 === 0));

// - Find all the odd numbers
console.log(numbers.filter((num) => num % 2 !== 0));

// - Place a new word at the start of the array use (unshift)
strings.unshift("It's");

// - Make a subset of numbers array [18,9,7,11]
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

let subsetNum = numbers.splice(3, 4);
console.log(subsetNum);

// - Make a subset of strings array ['a','collection']
let subsetStr = strings.splice(2, 2);
console.log(subsetStr);

// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221, 3, 1, 1881);

// - Replace words in strings array with the length of the word
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

let lengths = strings.map((elem) => elem.length);
console.log(lengths);
// - Find the sum of the length of words using above question

let sum = 0;
let totalLength = lengths.reduce((acc, elem) => {
  acc += elem;
  return acc;
}, 0);
console.log(totalLength);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];

// - Find all customers whose firstname starts with 'J'
for (let elem of customers) {
  if (elem.firstname[0] === "J") {
    console.log(elem.firstname);
  }
}

//----Or----//
let filterCustomer = customers.filter((customer) =>
  customer.firstname.startsWith("J")
);

// - Create new array with only first name
let firstNameCustomer = customers.map((customer) => customer.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")
let fullNameCustomer = customers.map(
  (customer) => `${customer.firstName} ${customer.lastname}`
);

// - Sort the array created above alphabetically
[...fullNameCustomer].sort;

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u")
  ) {
    return customer;
  }
});
console.log(vowelCustomer);
