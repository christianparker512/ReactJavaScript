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
//
// const multiply = (number) => number *5;
// console.log(multiply(5));
//
// const person = {
//   name: 'Chris'
// }
// export default person;

// Not working because I need to do es6 babel
class Human {
   gender='male';

  printGender = () => {
    console.log(this.gender);
  }
}
class Person extends Human{
  name = 'Chris';
  gender= 'female';

  printMyName = () => {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printGender();

//rest and spread
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);

const person1 = {
  name: 'Chris'
};
const newPerson = {
  ...person1,
  age: 50
}
console.log(newPerson);

//destructuring - easily extract array elements or object properties and store them in a variable
//array destructuring
[a,b]=['Hello', 'chris']
console.log(a)//hello
console.log(b)

const numbersDestructuring =[1,2,3];
[num1, ,num3] = numbersDestructuring;
console.log(num1,num3);
