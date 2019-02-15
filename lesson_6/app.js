// lesson 6: variable lifetime

function myFunction(){
    let i = "jo";
    const p = "bo";
    console.log(i, p);
}

console.log(i, p);

myFunction();