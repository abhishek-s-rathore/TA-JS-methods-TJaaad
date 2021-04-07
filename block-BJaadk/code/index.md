For the given code below you have to draw the diagram of how these things are working. Make it similar to the how it was done in previous (Visualise Array Methods) exercise.

- Keep the images in the `img` folder
- using the `![](./img/imagename.png)` add images below each code snippet

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  alert(num);
}

let doubleNum = numbers.forEach(double);
```

![1](./images/WhatsApp-01);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNum = numbers.forEach(double);
```

![2](./images/WhatsApp-02);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  console.log(num);
}
let doubleNum = numbers.forEach(double);
```

![3](./images/WhatsApp-03);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNumbers = numbers.map(double);
```

![4](./images/WhatsApp-04);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  return num + 2;
}
let doubleNumbers = numbers.map(addTwo);
```

![4](./images/WhatsApp-04);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  console.log(num);
}
let doubleNumbers = numbers.map(addTwo);
```

![5](./images/WhatsApp-05);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  alert(num);
}
let doubleNumbers = numbers.map(addTwo);
```

![6](./images/WhatsApp-06);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);
```

![7](./images/WhatsApp-07);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  return num;
}
let filteredNumbers = numbers.filter(test);
```

![8](./images/WhatsApp-08);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  console.log(num);
}
let filteredNumbers = numbers.filter(test);
```

![9](./images/WhatsApp-09);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(add);
```

![10](./images/WhatsApp-10);

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  console.log(accumulator + currentValue);
}
let sum = numbers.reduce(add);
```

![11](./images/WhatsApp-11);
