function add(a: number, b: number): number {
  return a + b;
}
const add3 = function (a: number, b: number): number {
  return a + b;
};

const add1 = (a: number, b: number): number => {
  return a + b;
};

const add2 = (a: number, b: number): number => a + b; // concise body syntax

// ------------------------------------------------------

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greet1 = function (name?: string): void {
  console.log(`Hello , ${name || 'Guest'}!`);
};

const greet2 = (name: string = 'Guest'): void => {
  console.log(`Hello, ${name}!`);
};

// ------------------------------------------------------

//! Never
// use when infinite loop
// use when function always throws an error

// function never returns

function throwError(msg: string): never {
  throw new Error(msg);
}

const error1 = throwError('Something went wrong!'); // This will throw an error and never return a value
console.log(error1); // This line will never be reached due to the error thrown above

// -------------------------------------------------------

//! function overloading

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // number addition
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; // string concatenation
  } else {
    throw new Error(
      'Invalid arguments. Both arguments must be either numbers or strings.'
    ); // Error handling for invalid argument types
  }
}
console.log(combine(2, 3)); // Output: 5
console.log(combine('Hello, ', 'world!')); // Output: Hello, world!
// console.log(combine(2, '3')); // This will throw an error because the types are incompatible

// ------------------------------------------------------

//! function overloading by parameter count

function greet12(): string;
function greet12(name: string): string;
function greet12(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return 'Hello, Guest!';
  }
}
