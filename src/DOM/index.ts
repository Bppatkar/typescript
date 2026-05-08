//! Type Casting/assertion utilities for DOM elements

//* Type Casting/assertion - simply means - mujhe pata hai ki element ka type kya hai, toh main usko us type mein convert kar sakta hoon.

// addOrConcat(5,6, 'add') // this returns 11
// addOrConcat(5,6,'Concat') // this returns '56'

function addOrConcat(
  a: number,
  b: number,
  c: 'add' | 'Concat'
): number | string {
  if (c === 'add') {
    return a + b;
  }
  return '' + a + b;
}
// const value: string = addOrConcat(5, 6, 'add'); // value is of type number | string
// Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.
const value: number = addOrConcat(5, 6, 'add') as number; // value is of type number
// Type casting - simply means - mujhe pata hai ki element ka type kya hai, toh main usko us type mein convert kar sakta hoon.
console.log(value); // Output: 11

const value2: string = addOrConcat(5, 6, 'Concat') as string; // value2 is of type number | string
console.log(value2); // Output: '56'

//? one more way to write it
const value3: string = <string>addOrConcat(5, 6, 'Concat'); // value3 is of type number | string
console.log(value3); // Output: '56'
// ----------------------------------------------------------------------

export function cast(elem: HTMLElement, type: new () => HTMLElement) {
  if (elem instanceof type) {
    return elem;
  }
  throw new Error(`Element is not of type ${type.name}`);
}

const elem1 = document.createElement('div');
const castedElem1 = cast(elem1, HTMLElement); // This will work because div is an HTMLElement

const elem2 = document.createElement('span');
const castedElem2 = cast(elem2, HTMLInputElement); // This will throw an error because span is not an HTMLInputElement

//-----------------------------------------------------------------------

//* Creating simple DOM manipulation using name and age input fields and a button to display the values in a div element.

const nameInput = document.getElementById('name')! as HTMLInputElement;
const ageInput = document.getElementById('age')! as HTMLInputElement;
const displayButton = document.getElementById('display')! as HTMLButtonElement;
const displayDiv = document.getElementById('displayDiv')! as HTMLDivElement;

function displayValues() {
  const name = nameInput.value;
  const age = ageInput.value;
  displayDiv.textContent = `Name: ${name}, Age: ${age}`;
}

displayButton.addEventListener('click', displayValues);
displayDiv.textContent =
  'Please enter your name and age, then click the display button.';
