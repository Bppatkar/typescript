function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
// console.log(greet(42)); // Output: Hello, 42! // Note: The second call will cause a TypeScript error because 42 is not a string.

// basic login function
function login(username: string, password: string): boolean {
  // In a real application, you would check the username and password against a database
  if (username === 'admin' && password === 'password') {
    return true; // Login successful
  }
  return false; // Login failed
}

console.log(login('admin', 'password')); // Output: true
console.log(login('user', 'pass')); // Output: false
