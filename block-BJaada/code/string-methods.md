Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: No parameter.
   - Return: A string in UpperCase letters.
     -Example:

   ```js
   let firstname = "Arya";
   let lastname = "Stark";
   let fullname = "Arya Stark";

   firstname.toUpperCase(); // "ARYA"
   lastname.toUpperCase(); // "STARK"
   fullname.toUpperCase(); // "ARYA STARK"
   ```

   - Used to convert any string to the UpperCase.

3. `toLowerCase`

- Parameter: No parameter.

  - Return: A string in LowerCase letters.
    -Example:

  ```js
  let firstname = "Arya";
  let lastname = "Stark";
  let fullname = "Arya Stark";

  firstname.toLowerCase(); // "arya"
  lastname.toLowerCase(); // "stark"
  fullname.toLowerCase(); // "arya stark"
  ```

  - Used to convert any string to the LowerCase.

4. `trim`

Parameter: No parameter.

- Return: A string without left and right space.
  -Example:

```js
let firstname = "   Abhishek  ";
let lastname = "Stark   ";
let fullname = "  John Snow";

firstname.trim(); // "Abhishek"
lastname.trim(); // "Stark"
fullname.trim(); // "John Snow"
```

- Used to remove spaces from the string.

5. `trimEnd`

- Parameter: No parameter.

- Return: A string in which there is no right space.
- Example:

```js
let firstname = "   Abhishek  ";
let lastname = "Stark   ";
let fullname = "  John Snow";

firstname.trimEnd(); // "  Abhishek"
lastname.trimEnd(); // "Stark"
fullname.trimEnd(); // "   John Snow"
```

- Used to remove spaces from the right of string.

6. `trimStart`

Parameter: No parameter.

- Return: A string in ehich there is no left space.
- Example:

```js
let firstname = "   Abhishek  ";
let lastname = "Stark   ";
let fullname = "  John Snow";

firstname.trimStart(); // "Abhishek   "
lastname.trimStart(); // "Stark  "
fullname.trimStart(); // "John Snow"
```

- Used to remove spaces from the left of string.

7. `concat`

Parameter: An string which is to be concatenated.

- Return: A Concatenated string.
- Example:

```js
let firstname = "Abhishek";
let lastname = " Singh";

firstname.concat(lastname); // "Abhishek Singh"
firstname.concat("Rathore"); // "Abhishek Rathore"
firstname.concat(lastname, " Rathore"); // "Abhishek Singh Rathore"
```

- Used to concatenate the multiple strings.

8. `endsWith`

- Parameter: An string which is to be searched in end of given string.

- Return: true or false.

- Example:

```js
let firstname = "Abhishek";
let lastname = "Singh";
let fullname = "John Snow";

firstname.endsWith("ek"); // true
firstname.endsWith(("ore"); // false
firstname.endsWith(("Snow"); // true
```

- Used to check wheather an string is present at end of given string or not.

9. `includes`

- Parameter: An string which is to be searched in given string.

- Return: true or false.

- Example:

```js
let firstname = "Abhishek";
let lastname = "Singh";
let fullname = "John Snow";

firstname.includes("i"); // true
lastname.includes("ore"); // false
fullname.includes(" Sn"); // true
```

- Used to check wheather an string is present in given string or not.

10. `indexOf`

- Parameter: An string whose index is to be find.

- Return: index (number)

- Example:

```js
let firstname = "Abhishek";
let lastname = "Singh";
let fullname = "John Snow";

firstname.indexOf("ek"); // 6
lastname.indexOf("ore"); // -1
fullname.indexOf("Snow"); // 5
firstname.indexOf(" "); // 0
```

- Used to find the index of any part of string

11. `lastIndexOf`

- Parameter: An character or string whose index is to be find.

- Return: index of last character or string in given which is entered (number)

- Example:

```js
let firstname = "Abhishek Singh";
let lastname = "oola oola ooye";
let fullname = "John Snow";

firstname.lastindexOf("i"); // 10
firstname.lastindexOf("o"); // 11
firstname.lastindexOf("o"); // 7
firstname.lastindexOf(" "); // 8
```

- Used to find the index of any part of string

12. `padEnd`

- Parameter: number; which tells total character of string and String; which is used as padding at end.

- Return: An string with padding at end

- Example:

```js
let firstname = "Abhishek Singh";
let lastname = "Singh";
let fullname = "Abhishek Singh";

firstname.padEnd("20", "."); // "Abhishek Singh......"
lastname.padEnd("10", "ab"); // "Singhababa"
fullname.padEnd("20", "!#"); // "Abhishek Singh!#!#!#"
```

- Used to add padding at the end of any string

13. `padStart`

- Parameter: number; which tells total character of string and String; which is used as padding at start.

- Return: An string with padding at start

- Example:

```js
let firstname = "Abhishek";
let lastname = "Singh";
let fullname = " Abhishek Singh";

firstname.padStart(12, " "); // "    Abhishek"
lastname.padStart(10, "_"); // "_____Singh"
fullname.padStart(20, "o"); // "ooooo Abhishek Singh"
```

- Used to add padding at the start of any string.

14. `repeat`

- Parameter: number; how many times the string should repeat.

- Return: An repeated string

- Example:

```js
let firstname = "Abhishek ";
let lastname = "Singh ";
let fullname = " Abhishek Singh ";

firstname.repeat(4); // "Abhishek Abhishek Abhishek Abhishek "
lastname.repeat(3); // "Singh Singh Singh "
fullname.repeat(2); // "Abhishek Singh Abhishek Singh "
```

- Used to return an repeated string.

15. `replace`

- Parameter: Two strings; what to replace, by which to replace with.

- Return: An modified string

- Example:

```js
let firstname = "Abhishek ";
let lastname = "Singh ";
let fullname = " Abhishek Singh ";

firstname.replace("A", "@"); // "@bhishek "
lastname.replace("S", "$"); // "$ingh "
fullname.replace("Singh", "Rathore"); // "Abhishek Rathore "
```

- Used to replace a part of string by anither string.

16. `slice`

- Parameter: Strings; what to replace, by which to replace with.

- Return: An modified string

- Example:

```js
let firstname = "Abhishek ";
let lastname = "Singh ";
let fullname = " Abhishek Singh ";

firstname.replace("A", "@"); // "@bhishek "
lastname.replace("S", "$"); // "$ingh "
fullname.replace("Singh", "Rathore"); // "Abhishek Rathore "
```

- Used to replace a part of string by anither string.

17. `split`

- Parameter: Strings; at place of which we hace to split.

- Return: An array

- Example:

```js
let name = "Abhishek Singh";
let student = "I am an student here.";

name.split(" "); // (2) ["Abhishek", "Singh"]
student.split("S", "$"); // (5) ["I", "am", "an", "student", "here."]
```

- Used to split the string into the array elements.

18. `substring`

- Parameter: Numbers; initial and final index of substring.

- Return: String

- Example:

```js
let name = "Abhishek Singh";
let student = "I am an student here.";

name.sunstring(0, 8); // "Abhishek"
student.substring(8, 15); // "student"
```

- Used to takeout a part of the given string using inital and final index.
