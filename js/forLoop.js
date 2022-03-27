// Section: Javascript Fundamentals Part 2

// Lecture: Iteration: The For Loop

// For loop keeps running while condition is TRUE
// Looping Arrays

console.log('I am a number 1');
console.log('I am a number 2');
console.log('I am a number 3');
console.log('I am a number 4');
console.log('I am a number 5');
console.log('I am a number 6');
console.log('I am a number 7');
console.log('I am a number 8');
console.log('I am a number 9');
console.log('I am a number 10');

for(let counter = 1; counter < 5; counter++) {
  console.log(`<li>${counter}</li>`);
}

const names = ["Deepak", "Santosh", "Rahul", "Seeta", "Guru", "Nikesh", "Suraj", 46, true, "Navodaya", "Manisha", "Priti", "Priyanka", "Harshali", "Nitu"];

const abc = names.length;

for(let i = 0; i <= abc; i++) {
  console.log(names[i]);
}
