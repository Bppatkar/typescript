//! Data Fetching

/*
- Introduction to Data Fetching.
- Fetch API and TypeScript. 
- Async/Await with TypeScript.
- Error Handling in Data Fetching.
- Real-world Example: Fetching User Data from an API.
- Using Generics for Flexible Data Fetching.
- Best Practices for Data Fetching in TypeScript.
*/

interface User {
  id: number;
  name: string;
  email: string;
}

/**
 * Generic function to fetch data from any API
 */
async function fetchData<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Fetch failed: ${response.statusText}`);
  return response.json();
}

// Usage
const API_URL = 'https://jsonplaceholder.typicode.com/users';

async function init() {
  try {
    const users: User[] = await fetchData(API_URL);
    console.table(users.map(({ id, name, email }) => ({ id, name, email })));
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Unknown Error');
  }
}

init();
