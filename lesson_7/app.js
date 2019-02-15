// lesson 7: closures and contexts

// global environment given by node process
// console.log(global);

// this = reference to curent context
console.log(this);

// closure with custom context (old way)
function myFunction1() {
    this.wurst = 123;
};

// closure with inherited context (new way)
const myFunction2 = () => {
    this.wurst = 456;
};

// custom closure/context with bind (for old way)
const myContext = {kaese: 5};
function myFunction3() {
    myFunction1.bind(myContext)();
};

// custom closure/context is not possible with bind (for new way)
// because array functions inherit their context during definition
function myFunction4() {
    myFunction2.bind(myContext)();
};

// no changes on the parent context
myFunction1();
console.log(this); // no changes

// changes on the parent context
myFunction2();
console.log(this); // changes
delete this.wurst; // reset for next test

myFunction3();
console.log(this); // no changes
console.log(myContext); // changes
delete myContext.wurst; // reset for next test

myFunction4();
console.log(myContext); // no changes