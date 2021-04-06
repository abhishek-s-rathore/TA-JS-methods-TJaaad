Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)

   - Return: a single Array consisting of by all the values passed as parameters in the same order.

   - Example:

     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```

   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.

   - No it does not mutate the original array

2. `join`

- Parameter: An string which can be inserted between array elements and if not given any value, elements will be separated by commas.

- Return: A single string containing all the array elements.

- Example:

  ```js
  const elements = ["Fire", "Air", "Water"];
  console.log(elements.join()); //  "Fire,Air,Water"
  console.log(elements.join("")); // "FireAirWater"
  console.log(elements.join(" ")); // "Fire Air Water"
  console.log(elements.join("-")); // "Fire-Air-Water"
  ```

- `join` accepts any string and returns one string containing all elements of array and separated by that string which is accept as iput. It does not change the original array.

- No it does not mutate the original array.

3. `flat`

- Parameter: No parameters.

- Return: A single array of elements,(No nesting).

- Example:

  ```js
  let elements = [
    "Jay",
    "Veeru",
    ["Basanti", "Gabbar", ["Aadmi-1", "Aadmi-2"]],
  ];
  let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];
  console.log(numbers.flat()); //  [1, 2, 3, 4, [5, 6, [7, 8]]]
  console.log(elements.flat(Infinity)); // ["Jay", "Veeru","Basanti","Gabbar","Aadmi-1","Aadmi-2"]
  console.log(numbers.flat(4)); // [1,2,3,4,5,6,7,8]
  ```

- `flat` accepts numberand take it as depth, and returns an flat array, i.e. no nested arrays.

- No it does not mutate the original array.

4. `push`

- Parameter: Any Value that is to be pushed in array, multiple values can also be taken.

- Return: An Array.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6];
  numbers.push(7); // [1, 2, 3, 4, 5, 6, 7];
  numbers.push(8, 9); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

- `push` accepts any value and add it to the end of the array.

- Yes, it mutates the original array.

5. `indexOf`

- Parameter: Any Value , whose index is to be find.

- Return: Number(index of element if present, otherwise returns -1)

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti"];
  numbers.indexOf(5); //  4
  numbers.indexOf(7); // -1
  names.indexOf("Shyam"); // 1
  ```

- `indexOf` accepts any value and returns the ined of the element if present in array otherwise returns -1.

- No, it dose not mutates the original array.

6. `lastIndexOf`

- Parameter: Any Value , whose last index is to be find.

- Return: Number(index of last most similar element if present, otherwise returns -1)

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.lastIndexOf(5); //  4
  numbers.lastIndexOf(7); // 7
  names.lastIndexOf("Ram"); // 5
  ```

- `LastIndexOf` accepts any value and returns the index of the last most element if present in array otherwise returns -1.

- No, it dose not mutates the original array.

7. `includes`

- Parameter: Any Value , which is to be find.

- Return: true if element is present or false if element is not present.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  names.includes("Ram"); //  true
  numbers.includes(7); // true
  numbers.includes(8); // false
  ```

- `includes` accepts any value which is to be find and returns true of false.

- No, it dose not mutates the original array.

8. `reverse`

- Parameter: Does not accept parameters.

- Return: A reversed array.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.reverse(); // [7,6,5,4,3,2,1]
  names.reverse(); //["Ram","Banti" , "Bablu","Karan", "Shyam", "Ram"]
  ```

- `reverse` is used to reverse the array.

- Yes, it mutates the original array.

9. `every`

- Parameter: Acccepts Callback function.

- Return: true or false.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.every(function(number){return number>0;});
  console.log(return); // true
  names.every(function(name){return name.lenght>2;});
  console.log(return); // true
  ```

- `every` takes a function and returns true if conition satisfies for every element.

- No, It does not mutates the array.

10. `shift`

- Parameter: Does not accept any parameter.

- Return: Array

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.shift(); //  [2, 3, 4, 5, 6, 7]
  names.shift(); // ["Shyam", "Karan", "Bablu", "Banti", "Ram"]
  ```

- `shift` is used to delete first element from array

- Yes, It mutates the array.

11. `splice`

- Parameter: numbers(index and count) and any value to add in array.

- Return: Array

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.splice(1);
  console.log(numbers); //[1]
  numbers.splice(1, 3);
  console.log(numbers); // [1,5,6,7];
  names.splice(1, 2, "John");
  console.log(names); // ["Ram", "John","Bablu" "Banti", "Ram"]
  ```

- `splice` is used to take out an small first length array.

- Yes, It mutates the array.

12. `find`

- Parameter: Acccepts callback function.

- Return: Element of array which firstly satisfies the condition.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  let findReturn = numbers.find(function (number) {
    return number > 5;
  });
  console.log(findReturn); // "6"
  let findReturn1 = names.find(function (name) {
    return name.lenght > 3;
  });
  console.log(findReturn1); // "Shyam"
  ```

- `find` takes a function and returns the first element which satisfies for every element.

- No, It does not mutates the array.

13. `unshift`

- Parameter: Does not accept any parameter.

- Return: Array

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.unshift(); //  [2, 3, 4, 5, 6, 7]
  names.unshift(); // ["Shyam", "Karan", "Bablu", "Banti", "Ram"]
  ```

- `unshift` is used to delete first element from array.

- Yes, It mutates the array.

14. `findIndex`

- Parameter: Acccepts callback function.

- Return: index of Element of array which firstly satisfies the condition.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  let findIndexReturn = numbers.find(function (number) {
    return number > 5;
  });
  console.log(findIndexReturn); // 5
  let findIndexReturn1 = names.find(function (name) {
    return name.lenght > 3;
  });
  console.log(findIndexReturn1); // 1
  ```

- `findIndex` takes a function and returns the index of first element which satisfies for every element.

- No, It does not mutates the array.

15. `filter`

- Parameter: A callback function.

- Return: Array.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];

  let evenNumber = numbers.filter((number) => {
    return (number % 2 === 0;);
  });
  console.log(evenNumbers); // [2,4,6]

  let oddNumber = numbers.filter((number) => {
  return (number % 2 !== 0;);
  });
  console.log(oddNumbers); // [1,3,5,7]

   let longNames = names.filter((name) => {
  return (name.length > 4;);
  });
  console.log(longNames); // ["Shyam", "Karan", "Bablu", "Banti"]
  ```

- `filter` is used to filter an array according to our conditions.

- No, It does not mutate the array.

16. `forEach`

- Parameter: A callback function.

- Return: By default it returns undefined. but we can use forEach to store values in an array and then use it.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  number.forEach(function (number) {
    console.log(numbers);
  });
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  ```

- `forEach` is used to create a new array with modified data using any other array.

- No, It does not mutate the array.

17. `map`

- Parameter: A callback function.

- Return: Array.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5];

  function double(number) {
    return number * 2;
  }

  function square(number) {
    return number ** 2;
  }

  function negative(number) {
    return (number = -number);
  }

  let doubleNumbers = numbers.map(double);
  console.log(doubleNumbers); // [2, 4, 6, 8, 10]

  let squareNumbers = numbers.map(square); // [1, 4, 9, 16, 25]
  console.log(squareNumbers);

  let negativeNumbers = numbers.map(negative);
  console.log(negativeNumbers); // [-1, -2, -3, -4, -5];
  ```

````

- `map` is used to make changes in an array aaccording to our conditions.

- No, It does not mutate the array.

18. `pop`

- Parameter: Does not accept any parameter.

- Return: Array

- Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7];
let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
numbers.pop(); //  [1,2, 3, 4, 5, 6]
names.pop(); // ["Ram", "Shyam", "Karan", "Bablu", "Banti"]
```

- `pop` is used to delete last element from array.

- Yes, It mutates the array.

19. `reduce`

- Parameter: elements(any value), index(number), array, accumulator, initial value.

- Return: Array or string or number or object etc.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.reduce((acc, number) => {
    return (acc += number;);
  }, 0); // 28
  names.reduce((acc, name) => {
    return (acc += name;);
  }, 0); //  "RamShyamKaranBabluBantiRam"
  ```

- `reduce` is used to reduce an array to a small array, number, string or object.

- No, It does not mutate the array.

20. `slice`

- Parameter: numbers(index and count) and any value to add in array.

- Return: Array

- Example:

```js
let numbers = [1, 2, 3, 4, 5, 6, 7];
let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
numbers.slice(1);
console.log(numbers); //[1, 2, 3, 4, 5, 6, 7]
numbers.slice(1, 3);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
names.slice(1, 2, "John");
console.log(names); // ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"]
```

- `slice` is used to take out an small first length array.

- No, It does not mutate the array.

21. `some`

- Parameter: Acccepts Callback function.

- Return: true or false.

- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let names = ["Ram", "Shyam", "Karan", "Bablu", "Banti", "Ram"];
  numbers.some(function(number){return number>5;});
  console.log(return); // true
  names.some(function(name){return name.lenght>4;});
  console.log(return); // true
  numbers.some(function(number){return number>7;});
  console.log(return); // false
  ```

- `some` takes a function and returns true if conition satisfies for any of the element.

- No, It does not mutates the array.
````
