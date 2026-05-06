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
let name:string = "Alice"; // type inference

// type anotation for function parameters and return type
function multiply(a: number, b: number): number {
  return a * b;
}

// type inference for function parameters and return type
function greet(name: string) { // yaha humne name parameter ke type ko explicitly specify kiya h, lekin return type ko specify nahi kiya h, to typescript khud se infer kar lega ki return type string h
  return `Hello, ${name}!`;
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
