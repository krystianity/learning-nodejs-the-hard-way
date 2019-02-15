// lesson 3: arrays

const y = [];

// add elements to the end of an array
y.push(123);
y.push(1,2,3);
y.push([1,2,3]);

// use the "indexer" to set an element at certain index
y[1] = "wurst"; // index in scope
y[10] = "kaese"; // index out of scope

console.log(y);

// length of an array
console.log(y.length);

// getting the first element of an array
console.log(y[0]); // always starts with 0

// getting the last element of an array
console.log(y[y.length - 1]);

// removing from array (starting from index 5, remove 5 elements from the array)
y.splice(5, 5);

console.log(y);