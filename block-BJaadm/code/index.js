let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((person) => person["name"]);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person["grade"]);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => person["sex"]);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let filteredNamed = persons.filter((person) => {
  return (
    person.name[0].toUpperCase() === "J" || person.name[0].toUpperCase() === "P"
  );
});

console.log(filteredNamed);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(
  peopleName.filter((name) => name.startsWith("A") || name.startsWith("C"))
    .length
);

// Log all the filtered male ('M') in persons array
console.log(
  persons.filter((elem) => {
    return elem.sex === "M";
  })
);

// Log all the filtered female ('F') in persons array

let filteredFemale = persons.filter((elem) => {
  return elem.sex === "F";
});

console.log(filteredFemale);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(
  filteredFemale.filter((elem) => {
    return (
      elem.name[0].toUpperCase() === "C" || elem.name[0].toUpperCase() === "J"
    );
  })
);

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((elem) => elem % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((elem) => elem.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((elem) => elem.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(
  persons.filter(
    (elem) => elem.name.startsWith("J") && elem.grade > 10 && elem.sex === "F"
  )
);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((elem) => {
  return elem.sex === "F";
});

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((elem) => {
  return elem.sex === "M";
});

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0);

// Find the average grade
let avgGrade = gradeTotal / peopleGrade.length;

// Find the average grade of male
let maleGrade = persons.filter((p) => p.sex === "M");
let avgMaleGrade =
  maleGrade.reduce((acc, cv) => {
    return acc + cv;
  }, 0) / maleGrade.length;

// Find the average grade of female
let femaleGrade = persons.filter((p) => p.sex === "M");
let avgFemaleGrade =
  femaleGrade.reduce((acc, cv) => {
    return acc + cv;
  }, 0) / femaleGrade.length;

// Find the highest grade
let arrangedGrade = [...peopleGrade].sort((a, b) => a - b).pop;

// Find the highest grade in male
let maleArray = persons.filter((elem) => elem.sex === "M");
console.log(maleArray.sort((a, b) => a.grade - b.grade).pop());

// Find the highest grade in female
let femaleArray = persons.filter((elem) => elem.sex === "F");
console.log(femaleArray.sort((a, b) => a.grade - b.grade).pop());

// Find the highest grade for people whose name starts with 'J' or 'P'
let selectedPerson = persons.filter((elem) => {
  return (
    elem.name.toUpperCase().startsWith("J") ||
    elem.name.toUpperCase().startsWith("P")
  );
});

console.log([...selectedPerson].sort((a, b) => a.grade - b.grade).pop());

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log([...peopleGrade].sort((a, b) => a - b));

// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a));

// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
