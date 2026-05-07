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
// data.toUpperCase(); // this will throw a runtime error if data holds a boolean value, because boolean values do not have the toUpperCase method

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
  // here type is a keyword to define a new type
  type: string; // here it just a value/property of the chaiOrder type, not a keyword
  sugar: number;
};

function serveChai(obj: unknown): obj is chaiOrder {
  return (
    typeof obj === 'object' &&
    obj != null &&
    typeof (obj as chaiOrder).type === 'string' &&
    typeof (obj as chaiOrder).sugar === 'number'
  );
}

function processChaiOrder(item: chaiOrder | string) {
  if (serveChai(item)) {
    console.log(`Serving ${item.type} with ${item.sugar} spoons of sugar.`);
  } else {
    console.log('Invalid chai order!');
  }
}
console.log(processChaiOrder({ type: 'Masala Chai', sugar: 2 })); // Serving Masala Chai with 2 spoons of sugar.
console.log(processChaiOrder('Just a string')); // Invalid chai order!

// ----------------------------------------------------

// other example for keyword and
type smallFoodCornersOrder = {
  type: 'veg'; // here type is a value/property of the smallFoodCornersOrder type, not a keyword
  item: 'maggie' | 'pasta' | 'sandwich';
  spiceLevel: 'mild' | 'medium' | 'hot';
};

// one more example
type dhabaSpecialOrder = {
  type: 'veg' | 'non-veg'; // here type is a value/property of the dhabaSpecialOrder type, not a keyword
  spiceLevel: 'mild' | 'medium' | 'hot';
  itemName: string;
  quantity: number;
  tableNumber: number;
  pricePerItem: number;
};

let order1: smallFoodCornersOrder = {
  type: 'veg',
  item: 'maggie',
  spiceLevel: 'medium',
};
let order2: dhabaSpecialOrder = {
  type: 'veg',
  spiceLevel: 'hot',
  itemName: 'Sev Tamatar',
  quantity: 2,
  tableNumber: 5,
  pricePerItem: 150,
};

function processOrder(order: smallFoodCornersOrder | dhabaSpecialOrder) {
  if (order.type === 'veg' && 'item' in order) {
    console.log(`Serving ${order.item} with ${order.spiceLevel} spice.`);
  } else if (order.type === 'veg' || order.type === 'non-veg') {
    console.log(
      `Serving ${order.itemName} with ${order.spiceLevel} spice, quantity: ${order.quantity}, table number: ${order.tableNumber}, price per item: ${order.pricePerItem}.`
    );
  } else {
    console.log('Invalid order!');
  }
}
console.log(processOrder(order1)); // Serving maggie with medium spice.
console.log(processOrder(order2)); // Serving Sev Tamatar with hot spice, quantity: 2, table number: 5, price per item: 150.

// ------------------------------------------------------
//! Type Assertion
//? Type assertion ka matlab hai ki hum TypeScript ko explicitly batate hain ki ek variable ka type kya hai, jab TypeScript khud se uska type infer nahi kar pata. Type assertion do tarike se kiya ja sakta hai: angle-bracket syntax (<>) aur as-syntax (as keyword). For example -
let someValue: unknown = 'Hello, TypeScript!';
// using angle-bracker syntax
let someValue1: string = <string>someValue; // here we are asserting that someValue is of type string
// using as-syntax
let someValue2: string = someValue as string; // here we are asserting that someValue is of type string

//* Now i will tell you where Type Assertion fails =
//? ye waha par fail ho jata hai jab hum ek type ko dusre type me assert karne ki koshish karte hain, jiska koi relation nahi hota. For example -
let numValue: number = 45;
// let strValue: string = numValue as string; // here we are trying to assert a number as a string, which is not possible, so it will throw a compile-time error

// ------------------------------------------------------
//! Never Type [2 types]
//* when we are working on role based access control , we can use never type to represent a value that should never occur.
//*  try catch block me bhi use hota hai, jab hme pata hota hai ki koi error kabhi nahi aayega, to hum us case ko never type se represent kar sakte hain.

// for example -
function handleUserRole(role: 'admin' | 'manager' | 'employee') {
  switch (role) {
    case 'admin':
      console.log('Access granted to admin panel');
      break;
    case 'manager':
      console.log('Access granted to manager dashboard');
      break;
    default: {
      console.log('Access granted to employee portal');
    }
  }
}
// if we try to call above function with a role that is not defined in the union type ['admin' | 'manager' | 'employee'], then it will throw a compile-time error, because we have not specified that the role can hold any other value.
// here is entry of never type - if we want to handle the case when an invalid role is passed to the function, we can use the never type to represent that case. For example -
function handleUserRoleWithNever(role: 'admin' | 'manager' | 'employee') {
  switch (role) {
    case 'admin':
      console.log('Access granted to admin panel');
      break;
    case 'manager':
      console.log('Access granted to manager dashboard');
      break;
    case 'employee':
      console.log('Access granted to employee portal');
      break;
    default: {
      const exhaustiveCheck: never = role;
      console.log(`Invalid role: ${exhaustiveCheck}`);
      throw new Error(`Unhandled role: ${exhaustiveCheck}`);
    }
  }
}
const userRole: 'admin' | 'manager' | 'employee' = 'employee'; // Fixed: assigned a valid role from the union type
// const invalidUserRole: 'admin' | 'manager' | 'employee' = 'guest'; // This will cause a compile-time error because 'guest' is not part of the union type
handleUserRoleWithNever(userRole);
// handleUserRoleWithNever(invalidUserRole); // This will not compile due to the invalid role assignment

// ------------------------------------------------------

//! Types and Interfaces
//? in dono se user , type define kr sakta hai, but interface me hum kai sare object type define kr sakte hai wo bhi same name se or interface extends krke ham doosre interface ko inherit kr sakte hain, jabki type me hum primitive types, union types, intersection types, and even complex object types define kr sakte hai and ek name se ek hi bar define kr sakte hain. For example -

// intersection means - jaha do ya do se jyada types ko combine karke ek naya type banate hain, jisme un sabhi types ke properties hote hain. For example -

type A = { a: number };
type B = { b: string };
type C = A & B; // C will have properties of both A and B, so C will be { a: number; b: string }

interface UserInterface {
  name: string;
  age: number;
  email: string;
  isWorking: boolean;
  salary: number;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

type UserType = {
  // primitives
  name: string;
  age: number;

  // union type
  email: string | null;

  // intersection type
  isWorking: boolean & { company: string };
  position: 'manager' | 'developer' | ('designer' & { department: string });

  // complex object type [or nested object type]
  address: {
    street: string;
    city: string;
    country: string;
  };
};

interface flipkart {
  id: number;
  name: string;
  price: number;
  discount: number;
}

interface flipkart {
  category: 'electronics' | 'fashion' | 'home' | 'beauty';
}
// we can extends one interface to another interface
interface meesho extends flipkart {
  returnPolicy: string;
}
const product1: meesho = {
  id: 1,
  name: 'Smartphone',
  price: 9999,
  discount: 10,
  category: 'electronics',
  returnPolicy: '30 days return policy',
};

//? see no error when both name are same in interface now type

// type amazon = {
//   id: number;
//   name: string;
//   price: number;
//   discount: number;
// };
// type amazon = {
//   // Duplicate identifier 'amazon'
//   category: 'electronics' | 'fashion' | 'home' | 'beauty';
// };

// ------------------------------------------------------

//? try catch block
function riskyOperation(): never {
  try {
    while (true) {
      // Simulating a risky operation that may throw an error
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        throw new Error('Random number is less than 0.5, operation failed!');
      }
      console.log("Still running...");
    }
  } catch (error: unknown) {
    throw new Error(`Operation failed: ${error}`);
  }
}
// const data1 = riskyOperation(); // This will run indefinitely until it throws an error, at which point it will be caught and re-thrown with a new error message. The return type of this function is never because it either runs indefinitely or throws an error, and never returns a value.
// console.log(data1); // This line will never be reached due to the nature of the riskyOperation function.
