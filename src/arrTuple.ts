// array and tuples

// array - ek collection of values, jisme hum multiple values ko store kar sakte hain, aur unhe index ke through access kar sakte hain.
let numbers: number[] = [1, 2, 3, 4, 5];

// tuple - ek fixed length array, jisme hum different types of values ko store kar sakte hain, aur unhe index ke through access kar sakte hain.

let person: [string, number] = ['John', 30];

// we can also use type aliases to define tuples
type PersonTuple = [string, number];
let person1: PersonTuple = ['Jane', 25];

person[0] = 'John';
person[1] = 30;

const myArray: (string | boolean)[] = ['alice', 'bob', true, false];
console.log(myArray); // Output: ['alice', 'bob', true, false]

myArray.push('charlie');
myArray.push(false);
console.log(myArray); // Output: ['alice', 'bob', true, false, 'charlie', false]

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
  isWorking: boolean;
  company: string;
  companyLocation: string;
}

const personDetail: Person[] = [
  {
    name: 'John',
    age: 30,
    isStudent: false,
    isWorking: true,
    company: 'ABC Inc.',
    companyLocation: 'New York',
  },
];

//! Tuples
//? array with fixed size and types

const tuple: [string, number] = ['John', 30];
const tuple2: [string, number][] = [
  ['John', 30],
  ['Jane', 25],
];

//! enums
//? group of constants with names

enum Color {
  Red,
  Green,
  Blue,
}

const color: Color = Color.Red;
console.log(color); // Output: 0

const colorName: string = Color[1];
console.log(colorName); // Output: Green

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

const direction:Direction = Direction.Left;
console.log(direction); // Output: LEFT
