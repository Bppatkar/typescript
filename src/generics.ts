//! Generics & Utilities
/* 
- Introduction to Generics.
- Generic Constraints (extends).
- Real-world Example: Data Fetching with Generics.
- Utility Types (Partial, Required, Readonly, Record).
- Exclude and ReturnType.
- keyof and typeof Operators. 
*/

//? Generics mein use krte hai hum angle brackets <> , aur usme type parameter pass krte hai, jise hum kisi bhi naam se represent kar sakte hai, lekin convention ke roop me hum CustomType, T, U, V, etc. ka use karte hai.
//* seedhi bhasha mein, generics hume ek aise function ya class banane ki suvidha dete hai jo kisi bhi type ke sath kaam kar sakte hai, bina type ko specify kiye. Isse hamara code zyada flexible aur reusable ho jata hai.

// ek function banate hai pehle jisme 5 argument mein denge to 5 hi return aaye, or agar 'Hello world' argument mein denge to 'Hello world' hi return aaye, iske liye hum generics ka use karenge.

function identity(arg: any): any {
  return arg;
}
console.log(identity(5)); // Output: 5
console.log(identity('Hello world')); // Output: 'Hello world'

// agar main toLowerCase method use krna chahu to

const val = identity(5);
val.toLowerCase(); // This will throw an error because val is of type number, and it does not have the toLowerCase method, agar val string hoti to ye method work karta , isliye hum generics ka use karenge, taki hamara code zyada flexible ho jaye.

//? Generics mein use krte hai hum angle brackets <> , aur usme type parameter pass krte hai, jise hum kisi bhi naam se represent kar sakte hai, lekin convention ke roop me hum CustomType, T, U, V, etc. ka use karte hai.

//* Identidy function with generics

function identityGenerics<CustomType>(arg: CustomType) {
  return arg;
}

identityGenerics<string>('Hello world'); // yaha string likh diya to string hi pass krna hoga
identityGenerics<boolean>(true); // yaha boolean likh diya to boolean hi pass karna hoga
// identityGenerics<number>('Bhanu'); // This will throw an error because we have specified that the type parameter is number, but we are passing a string, isliye hume number pass karna hoga

const val1 = identityGenerics<string>('Hello world');
// val1 - now i can use string methods on val1 because it is of type string

// -------------------------------------------------------

//! one more example [Role based access control]

interface User {
  name: string;
  role: string;
}

const getUserDetails = <T>(user: T) => {
  return user;
};

const user1: User = { name: 'John', role: 'Admin' };
const userDetails = getUserDetails<User>(user1);
console.log(userDetails); // Output: { name: 'John', role: 'Admin' }

// -------------------------------------------------------

//* if we want to limit that our function can only accept certain types, we can use generic constraints with the extends keyword.
// for example string and number types ko accept karna hai to hum is tarah se likhenge

function limitedFunctionwithExtends<T extends string | number>(args: T): T {
  return args;
}

console.log(limitedFunctionwithExtends('Hello')); // Output: 'Hello'
console.log(limitedFunctionwithExtends(42)); // Output: 42
// console.log(limitedFunctionwithExtends(false)); // This will throw an error because we have specified that the type parameter can only be string or number, but we are passing a boolean, isliye hume string ya number pass karna hoga

//--------------------------------------------------------
//* Now we crete a function that takes array as an argument and returns the first element of the array, but we want to make sure that the array is of a certain type, for example string array, to do this we can use generic constraints with extends keyword.

function getFirstElem<T extends unknown>(args: T[]): T {
  return args[0];
}

console.log(getFirstElem<string>(['hello', 'worlds'])); // Output: 'hello'
console.log(getFirstElem<number>([1, 2, 3])); // Output: 1
console.log(getFirstElem<boolean>([false])); // Output: false

//--------------------------------------------------------

//? ek function banate hai jo 2 arguments lega and unhe key value pair mein convert kr dega and array return krega
// isiliye ham generices mein 2 type parameters ka use karenge, T for key aur U for value

function toKeyValuePair<T, U>(key: T, val: U): [T, U] {
  return [key, val];
}
const valFirst = toKeyValuePair<string, number>('age', 30);
console.log(valFirst); // Output: ['age', 30]

//--------------------------------------------------------
//? we can use those methods which we use in js
// for example we can use length method ,array and string dono mein length method hota hai, to hum is tarah se likhenge

function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
console.log(getLength('Hello')); // Output: 5
console.log(getLength([1, 2, 3, 4])); // Output: 4
// console.log(getLength(123)); // This will throw an error because we have specified that the type parameter must have a length property, but number does not have a length property, isliye hume string ya array pass karna hoga
