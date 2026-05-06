function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
console.log(greet(42)); // Output: Hello, 42! // Note: The second call will cause a TypeScript error because 42 is not a string.