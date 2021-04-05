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

- `includes` accepts any value which is to be find and returns true of false.

- Yes, it mutates the original array.

9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `forEach`
17. `map`
18. `pop`
19. `reduce`
20. `slice`
21. `some`
