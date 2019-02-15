// lesson 7: Truthyness and falsyness.

const anArrayWithValues = [
    null,
    false,
    undefined,
    "",
    0,
    [],
    true,
    1,
    "some",
    ["some"]
];

anArrayWithValues.forEach((element) => {

    if(element){
        console.log(element, "is truthy");
    } else {
        console.log(element,  "is not truthy");
    }

    if(!element){
        console.log(element, "is falsy");
    } else {
        console.log(element,  "is not falsy");
    }
});