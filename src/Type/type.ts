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
