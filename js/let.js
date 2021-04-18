// Because this a const it's going to throw an error'
// const myName = 'Quincy';
// console.log(myName);


// let myName = "Chris";
// console.log(myName);
//
// myName = 'Lisa';
// console.log(myName);

// function printMyName(name){
//   console.log(name);
// }
// printMyName('Chris');

// const printHerName(name){
//   console.log(name);
// }
// printHerName('lisa');


const printMyName = (name, age) => {
  console.log(name, age);
}
printMyName('Chris', 50);

// const multiply = (number)=> {
//   return number *2;
// }
// console.log(multiply(2));

const multiply = (number) => number *5;
console.log(multiply(5));

const person = {
  name: 'Chris'
}
export default person;
