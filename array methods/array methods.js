// Rjay luis Acosta BSCS-1B
// arrayMethodsActivity.js

// 1. Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Concatenated array:", combinedArr);

// 2. Use push() to add "Kiwi" to the fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push:", fruits);

// 3. Use unshift() to add 4 and 5 to the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift:", array1);

// 4. Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("After pop:", fruits);

// 5. Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log("After shift:", array2);

// 6. Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("Sorted fruits:", fruits);

// 7. Use slice() to create a new array from fruits (e.g., 1st to 3rd element)
let slicedFruits = fruits.slice(0, 3);
console.log("Sliced fruits (0 to 2):", slicedFruits);

// 8. Use splice() to insert and remove elements in the months array
let months = ["Jan", "March", "April", "June"];
// Insert "Feb" at index 1, remove 0 elements
months.splice(1, 0, "Feb");
// Replace "June" with "May"
months.splice(4, 1, "May");
console.log("Updated months with splice:", months);