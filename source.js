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
console.log(destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" )); // => [ 12, 92, 65 ]