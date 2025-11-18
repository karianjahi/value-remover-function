# 🧩 value-remover-function

A small JavaScript lab that practices **higher-order functions**, **callbacks**, and **rest parameters** by building a reusable **value remover utility**.

---

## ✨ Overview

The core of this repo is a single function:

```js
const destroyer = (anArray, ...args) => {
  return anArray.filter((num) => !args.includes(num));
};
```

This function:

- ✅ Takes an initial array as the first argument  
- ✅ Accepts an indeterminate number of additional arguments using rest parameters (`...args`)  
- ✅ Returns a new array with all values **removed** that match any of the extra arguments  
- ✅ Uses **higher-order functions and callbacks**:  
  - `Array.prototype.filter()` → takes a callback to decide which elements to keep  
  - The callback uses `Array.prototype.includes()` to check if a value should be removed  


---

## 🎯 Learning Goals

This lab is designed to reinforce:

### 🧠 Higher-Order Functions  
`filter()` is a higher-order function because it **receives a function as an argument** and returns a new array based on the callback’s result.

### 🔁 Callback Functions  
The arrow function `(num) => !args.includes(num)` is a **callback** that determines whether each element stays or is removed.

### 📦 Rest Parameters as Arrays  
The syntax `...args` collects all remaining arguments into a **real array-like structure** that behaves like a normal array, allowing:

- `args.includes(value)`  
- Iteration and other array methods  

This is different from `arguments` (the older pseudo-array), making the function more modern and expressive.

---

## 🧪 Implementation

### Source

```js
/*
Implementing a Value Remover Function
In this lab, I create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.

User Stories:

1. I create a `destroyer` function that accepts an array and one or more additional arguments.
2. The `destroyer` function returns a new array excluding all elements from the first argument that match any of the subsequent arguments.
3. The function accepts an indeterminate number of arguments.

*/

const destroyer = (anArray, ...args) => {
    return anArray.filter((num) => !args.includes(num))
}


// Tests
console.log(destroyer([2, 3, 5, 7, 1], 2, 5, 1, 5)); // => [ 3, 7 ]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // => [ 1, 1 ]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // => [ 1, 5, 1 ]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // => [ 1 ]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // => []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // => [ 'hamburger' ]
console.log(
  destroyer(
    ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
    "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"
  )
); // => [ 12, 92, 65 ]
```
## 🚀 Usage
Run the file with Node:
```bash
node source.js
```
You’ll see the filtered arrays logged to the console, demonstrating different use cases (numbers, strings, and mixed arrays).

## 🧠 How It Works (Step by Step)
- `destroyer` is called with:

    - an array to clean

    - one or more values to remove

- `...args` collects all values to remove into a rest parameter array.

`filter()` loops through every element in anArray:

    - The callback only returns true if the current element is not included in `args`.

    - Elements that match any of the removal values are filtered out.

- A new array is returned — the original array remains unchanged ✅ (functional style).

## 🧩 Example
```js
destroyer([2, 3, 5, 7, 1], 2, 5, 1);
// ➜ [3, 7]
```
- Original array: `[2, 3, 5, 7, 1]`

- Values to remove: `2, 5, 1`

- Result: Only `3` and `7` remain.

## 📚 Concepts Practiced
- Higher-order functions (`filter`)

- Callback functions (arrow function inside filter)

- Rest parameters (`...args`)

    - collected and then used like a normal array with methods like `includes()`

- Non-mutating operations – returns a new array instead of modifying the original

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.
