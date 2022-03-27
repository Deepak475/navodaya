// Section: Javascript Fundamentals Part 1

// Lecture: Functions
// Lecture: Functions Declarations VS. Expressions

// Function
let num1 = 100;
let num2 = 0;

function fruitProcessor(apples, oranges) {
  const fruitJuice = `This is a apples ${apples}. and this is a ${oranges} oranges.`;
  return fruitJuice;
}

fruitProcessor(23, 78);

const appleJuice = fruitProcessor(num1, num2);
console.log(appleJuice);

// Functions Declarations
const age1 = birthInfo(2008);
console.log(age1);

function birthInfo(birthYear) {
  return 2034 - birthYear;
}

// Function Expressions
const age2 = function (birthYear) {
  return 2022 - birthYear;
}

console.log(age2(2004));


// Lecture: Arrow Function
// Lecture: Functions inside Functions

// Regular Function
function myName(age, isAged) {
  const num1 = 300;
  return age * isAged - num1

}

const myAge = myName(50, 90);
console.log(myAge);

// Arrow Function ECMA Script(ES6)
const myNavodaya = (age, isAged) => {
  const num1 = 300;
  return age * isAged - num1 + 100
}

console.log(myNavodaya(50, 90));

// Functions inside Functions
function fruitCutter(app, oran) {
  return app * oran
}

function fruitProcessor(apples, oranges) {
  const juiceApple = fruitCutter(apples, oranges);
  const juiceOranges = fruitCutter(apples, 5);
  function fruitChild(age1, age2) {
    function kingOfFruit(fruit1, fruit2) {
      let finalResult = `I am a fruit Child with age ${fruit1} and my brother is ${fruit2}.`;
      return finalResult;
    }
    const checkKing = kingOfFruit(age1, age2);
    return checkKing;
  }
  const childFruit = fruitChild(juiceApple, juiceOranges);
  // const juice = `Apple qty is ${juiceApple} and oranges is ${juiceOranges}.`;
  return childFruit;
}

const result1 = fruitProcessor(99, 84);
console.log(result1);

const result2 = fruitProcessor(104, 284);
console.log(result2);
