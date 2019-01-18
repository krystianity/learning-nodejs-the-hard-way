// lesson 3: closure

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
    this.wurst = 123;
};

function myFunction3() {
    myFunction2.bind(this)();
};

const myContext = {kaese: 5};
function myFunction4() {
    myFunction2.bind(myContext)();
};

myFunction1();
console.log(this);

myFunction3();
console.log(this);

myFunction2();
console.log(this);

myFunction4();
console.log(myContext);