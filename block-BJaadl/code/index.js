let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

//- Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord = function (array) {
  let decArray = array.sort((a, b) => b.length - a.length);
  const word = decArray[0];
  console.log(word);
  return word;
};
findLongestWord([...words]);

// - Convert the above array "words" into an array of length of word instead of word.
let lengthArray = function (array) {
  return array.map((elm) => elm.length);
};

console.log(lengthArray([...words]));

// - Create a new array that only contains word with atleast one vowel.
let wordsWithVowel = [...words].filter((elem) => {
  return (
    elem.toLowerCase().includes("a") ||
    elem.toLowerCase().includes("e") ||
    elem.toLowerCase().includes("i") ||
    elem.toLowerCase().includes("o") ||
    elem.toLowerCase().includes("u")
  );
});

console.log(wordsWithVowel);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
let wordsStratWithVowel = [...words].filter((elem) => {
  return (
    elem.toLowerCase().startsWith("a") ||
    elem.toLowerCase().startsWith("e") ||
    elem.toLowerCase().startsWith("i") ||
    elem.toLowerCase().startsWith("o") ||
    elem.toLowerCase().startsWith("u")
  );
});

console.log(wordsStratWithVowel);

// - Create a new array that contianse words not ending with vowel
let wordsEndsWithConsonents = [...words].filter((elem) => {
  if (
    elem.toLowerCase().endsWith("a") ||
    elem.toLowerCase().endsWith("e") ||
    elem.toLowerCase().endsWith("i") ||
    elem.toLowerCase().endsWith("o") ||
    elem.toLowerCase().endsWith("u")
  ) {
  } else {
    return elem;
  }
});

console.log(wordsEndsWithConsonents);

//-----------------------------------------------//

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = function (array) {
  return array.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
console.log([...numbers].map((elem) => elem * 3));

// - Create a new array that contains only even numbers
console.log([...numbers].filter((elem) => elem % 2 === 0));

// - Create  a new array that contains only odd numbers.
console.log([...numbers].filter((elem) => elem % 2 !== 0));

// - Create a new array that should have true for even number and false for odd numbers.
console.log(
  [...numbers].map((elem) => {
    if (elem % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
);

// - Sort the above number in assending order.
console.log(numbers.sort((a, b) => a - b));

// - Does sort mutate the original array?
// Yes it mutates the original array.

// - Find the sum of the numbers in the array.
console.log(numbers.reduce((acc, cv) => acc + cv, 0));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNumbers = function (array) {
  return (
    array.reduce((acc, cv) => {
      acc = acc + cv;
      return acc;
    }, 0) / array.length
  );
};
console.log(averageNumbers(numbers));

//-----------------------------------//

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words) {
  return (
    words
      .map((w) => w.length)
      .reduce((acc, cv) => {
        acc = acc + cv;
        return acc;
      }, 0) / words.length
  );
}
