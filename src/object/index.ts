// we define obj using const to prevent reassignment

// for example if we try to create obj using let
let obj = {
  name: 'John',
  age: 30,
};
// we can reassign obj to a new object
obj = {
  name: 'Jane',
  age: 25,
};

// but if we define obj using const
const obj2 = {
  name: 'John',
  age: 30,
};
// we cannot reassign obj2 to a new object
// obj2 = {
//   name: 'Jane',
//   age: 25,
// }; // Error: Cannot assign to 'obj2' because it is a constant.

// however we can still modify the properties of obj2
obj2.name = 'Jane';
obj2.age = 25;
// obj2 is still the same object, but its properties have been modified
console.log(obj2); // { name: 'Jane', age: 25 }

// ------------------------------------------------------

// Type Aliases object
// yaha ham dekhege, type, interface and type aliases ke beech me kya difference hai, aur kab kaun sa use karna chahiye.

// type - keyword, hai, interface bhi ek keyword hai , aur type aliases bhi ek keyword hai, lekin in teeno ka use alag alag hota hai.
// example - type alias, interface, type

//  type = used for primitives, unions and tuples that are not easily represented using interfaces.
type Point = {
  x: number;
  y: number;
};

// interface =
interface PointInterface {
  // used for defining the shape of an object, and can be extended or implemented by classes.
  x: number;
  y: number;
}

// type aliases - ek custom type create karne ke liye use hota hai, jise hum apne code me easily refer kar sakte hain.

type userHiring = {
  name: string;
  age: number;
  email: string;
  skills: string[]; // array of strings, isme hum user ke skills ko store kar sakte hain, jaise ki programming languages, frameworks, etc.
  experience: number; // number of years of experience, isme hum user ke experience ko store kar sakte hain, jaise ki 5 years, 10 years, etc.
};

const candidate1: userHiring = {
  name: 'Alice',
  age: 30,
  email: 'example@google.io',
  skills: ['JavaScript', 'TypeScript', 'React'],
  experience: 5,
};

//* Type aliases simple word main bole to type ka new name hai, is se hum complex types ko easily refer kar sakte hain, aur code ko zyada readable bana sakte hain.
