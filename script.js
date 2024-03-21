// a variable like structure that can hold more than 1 value

let fruits = [`apples`,`oranges`,`bananas`];
let noOfFruits = fruits.length;
let indexofApple = fruits.indexOf(`apples`);


fruits[1] = `coconut`;
fruits.push(`grapes`);//adds an object to the end
fruits.pop();// removes the last object from the list
//fruits.unshift(`berries`);//adds an object to the beginning
//fruits.shift(`berries`);//removes an object to the beginning

console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[0]);
console.log(noOfFruits);
console.log(indexofApple);



