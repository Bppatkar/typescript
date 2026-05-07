//! Types
//! Type anotation and Inference
//* Type anotation means when we explicitly specify the type of a variable, function parameter, or return value.
/* 
for example 
let age: number = 25; // here we are explicitly specifying that the type of age is number 
function add(a: number, b: number): number { // here we are explicitly specifying that the type of a and b is number and the return type of the function is also number
}
/* 

! Type inference means when we do not explicitly specify the type of a variable, function parameter, or return value, TypeScript will try to infer the type based on the value assigned to it or the context in which it is used.

/*
for example 
let name = "Alice"; // here we are not explicitly specifying the type of name, but TypeScript will infer that it is a string based on the value assigned to it
*/

//? In simple word -
// type anotation - ham smjhayege ki ye variable kis type ka hoga
// type inference - typescript tum khud smjh jao ki ye variable kis type ka hoga

// ------------------------------------------------------

let age: number = 25; // type anotation
let name: string = 'Alice'; // type inference

// type anotation for function parameters and return type
function multiply(a: number, b: number): number {
  return a * b;
}

// type inference for function parameters and return type
function greet(name: string) {
  // yaha humne name parameter ke type ko explicitly specify kiya h, lekin return type ko specify nahi kiya h, to typescript khud se infer kar lega ki return type string h
  return `Hello, ${name}!`;
}

// -----------------------------------------

//! Union and any types

//? Union type means when a variable can hold more than one type of value, we can use union types to specify that. We can use the pipe (|) symbol to separate the different types that a variable can hold. For example -
let id: number | string; // here we are specifying that the variable id can hold either a number or a string
id = 123; // valid
id = 'abc'; // valid
// id = true; // invalid - because we have not specified that id can hold a boolean value

let apiResponseStatus: 'success' | 'pending' | 'error';
apiResponseStatus = 'success'; // valid
// apiResponseStatus = 'bhanu'; // invalid - because we have not specified that apiResponseStatus can hold a value other than 'success', 'pending', or 'error'

// * ------------------------------------------------------------------

//? Any type means when we want to allow a variable to hold any type of value,
// this is usefull when we are not sure about the type of value that a variable will hold, or when we want to allow a variable to hold multiple types of values without having to specify them explicitly.

// however, using the any type can be dangerous because it can lead to runtime errors if we try to access properties or call methods on a variable that holds a value of an unexpected type. Therefore, it is generally recommended to avoid using the any type and to use union types or other more specific types instead.

let data: any; // here we are specifying that the variable data can hold any type of value
data = 123;
data = 'abc';
data = true; // valid - because we have specified that data can hold any type of value
// however, we should be careful when using the any type, because it can lead to runtime errors if we try to access properties or call methods on a variable that holds a value of an unexpected type. For example -
data.toUpperCase(); // this will throw a runtime error if data holds a boolean value, because boolean values do not have the toUpperCase method

/* 
Difference samajh:
| Feature                    | Inference               | Any                         |
|----------------------------|-------------------------|-----------------------------|
| TypeScript check karta hai? | ✅ Haan, strict check   | ❌ Nahi, koi check nahi     |
| Safe hai?                  | ✅ Safe                 | ❌ Unsafe (JavaScript jaisa)|
| Use kab karein?            | Hamesha preferred       | Jab no idea what type (rare)|
*/

// ------------------------------------------------------

//! unknown type
//? its simple means when u want to use any, so instead of using any

// example -
let value: unknown; // here we are specifying that the variable value can hold any type of value, but we have to perform a type check before we can access its properties or call its methods

// ------------------------------------------------------

//! Type narrowing
//? Narrowing ka matlab hai "Type ko filter karna".
// Jab ek variable multiple types ka ho sakta hai (Union), toh hum conditions laga kar uska exact type confirm karte hain taaki TS error na de.

function processData(input: string | number) {
  // Narrowing using 'typeof'
  if (typeof input === 'string') {
    console.log(input.toUpperCase()); // Ab TS ko pata hai ye string hi hai
  } else {
    console.log(input.toFixed(2)); // Ab TS ko pata hai ye number hi hai
  }
}

//! Type Guards
//? Type Guards wo expressions/functions hain jo "Narrowing" karne mein madad karte hain.
// Common guards: typeof, instanceof, 'in' operator, or custom functions.

class KulhadChai {
  serve() {
    console.log('Serving hot Kulhad Chai!');
  }
}

class CuttingChai {
  serve() {
    console.log('Serving refreshing Cutting Chai!');
  }
}

function servingChai(chai: KulhadChai | CuttingChai) {
  // instanceof is a type guard
  if (chai instanceof KulhadChai) {
    // instanceof js ka operator hai, hua kuch nahi hai bs extra best practices ke liye use karte hain, isse simple ye pata chal jayega ki serve karne wala chai kulhad chai hai ya cutting chai, aur uske hisab se serve karenge
    chai.serve();
  } else {
    chai.serve();
  }
}

console.log('--- Type Narrowing and Guards Example ---');
const kulhad = new KulhadChai();
const cutting = new CuttingChai();
servingChai(kulhad); // Serving hot Kulhad Chai!
servingChai(cutting); // Serving refreshing Cutting Chai!

//* Summary: Narrowing ek "Goal" hai, aur Type Guard us goal tak pahunchne ka "Rasta" (Tool) hai.

//? Yaha par typescipt ek power deta hai , type define krne ka isse hota ye hai ki - hme type narrowing (filtering) and type guards (typeof, instanceof, in operator) ka use krke apne code ko jyada safe and error free bana skte hai

type chaiOrder = {
  type: string;
  sugar: number;
};

const order1: chaiOrder = {
  type: 'kulhad',
  sugar: 2,
};

const order2: chaiOrder = {
  type: 'cutting',
  sugar: 1,
};

function serveChai(order: chaiOrder){
  if(order.type === 'kulhad' && order.sugar > 0){
    console.log('Serving hot Kulhad Chai!');
  }else if(order.type === 'cutting' && order.sugar > 0){
    console.log('Serving refreshing Cutting Chai!');
  }else{
    console.log('Invalid Chai Type!');
  }
}

// ------------------------------------------------------
// Type Aliases
//* Type aliases allow us to create a new name for a type. This can be useful for making our code more readable and easier to understand. We can create type aliases for primitive types, union types, intersection types, and even for complex object types. [in simple word - type alias ek naya naam create krta h kisi type ke liye, jisse hamara code jyada readable aur samajhne me asaan ho jata h]
// for example -
type User = {
  name: string;
  age: number;
  email: string;
};

const user1: User = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
};
