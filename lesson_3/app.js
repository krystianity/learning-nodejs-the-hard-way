// lesson 3: arrays

// Section A:

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


// Section B:

// removing from array (starting from index 5, remove 5 elements from the array)
y.splice(5, 5);

console.log(y);

// deleting the last element from an array

const lastElement = y.splice(y.length - 1, 1);
console.log(y, lastElement);


// Section C:

// iterating through an array (classical way)

for(let i = 0; i < y.length; i++){
    console.log(y[i]);
}

// iterating through an array (new way)

for(const element of y){
    console.log(element);
}

// iterating through an array (functional)

const iteratorFunction = (element) => {
    console.log(element);
};

y.forEach(iteratorFunction);