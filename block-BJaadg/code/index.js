// After knowing about string methods, practice those by solving problems given below.

let from = "Syrio Forel";
let quote = "There is only one thing we say to death: Not today";
let to = "Arya Stark";

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs = quote.search("is");

/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
console.log(quote.charAt(indexOfIs));

/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first is in "${quote}" is ${quote.search("is")}.`);

/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
for (let i = 0; i <= 5; i++) {
  console.log(`The character at index ${i} is '${quote[i]}'`);
}

/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
console.log(from.concat(" said ", quote, " to ", to, "."));

/*
6. Does from, to and quote ends with "rk". Check all three.
*/
console.log(
  to.charAt(from.length - 2) === "r" && from.charAt(to.length - 1) === "k"
);
console.log(
  to.charAt(quote.length - 2) === "r" && to.charAt(quote.length - 1) === "k"
);
console.log(
  to.charAt(to.length - 2) === "r" && to.charAt(to.length - 1) === "k"
);

/*
7. Does quote includes the word "Only"
*/
console.log(quote.includes("Only"));

/*
8. Does quote includes the word " we"
*/
console.log(quote.includes("we"));

/*
9. Find the index of the the word `we` in quote
*/
console.log(quote.search("is"));

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(" ");

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
quoteSplitted.splice(quoteSplitted.length - 1, 1, "tomorrow");

/*
12. Find the index of second "o" in quote. Use indexOf
*/
console.log(quote.indexOf("o"));

/*
13. Find the last index of letter "a" in quote.
*/
console.log(quote.lastIndexOf("a"));

/*
14. Find the second last index of letter "a" in quote.
*/
num = 0;
for (let i = quote.length - 1; i >= 0; i--) {
  if (quote[i] === "a") {
    num += 1;
    if (num === 2) {
      console.log(i);
    }
  }
}

// let aCount = quote.split("a").length - 1;
// let count = 0;
// for (let i = 0; i < quote.length; i++) {
//   if (quote[i] === "a") {
//     count++;
//     if (count === aCount - 1) {
//       console.log(i);
//     }
//   }
// }

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
console.log(quote.padEnd(70, "."));

/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/
console.log(quote.padStart(70, "."));

/*
17. Log the repeat of "Hello World!" 10 times.
*/
console.log("Hello World!".repeat(10));

/*
18. Replace today to tomorrow in quote.
*/
console.log(quote.replace("today", "tommorow"));

/*
19. Replace Stark to Lannister in quoteTo
*/
console.log(to.replace("Stark", "Lannister"));

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/

/*
21. Find out does quote, from, to starts with "A"
*/
console.log(quote[0] === "A");
console.log(from[0] === "A");
console.log(to[0] === "A");
