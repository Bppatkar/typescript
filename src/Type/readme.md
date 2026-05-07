# TypeScript - Types aur Type System

## Complete Guide to TypeScript Types (Hinglish)

---

## 1️⃣ Type Annotation (Explicit Type Define Karna)

### Meaning (Matlab)

Type Annotation matlab jab hum explicitly specify karte hain ki ek variable, function parameter, ya return value kis type ka hoga.

**Asaan shabd mein**: Hum TypeScript ko batate hain - "Yeh value is type ki hogi"

### Illustration (Example)

```
✅ Type Annotation (saaf-saaf bataya)
let age: number = 25;  // Hum kehte hain: age ek NUMBER hai

❌ Bina Type Annotation (unclear)
let age = 25;  // TypeScript ko khud samajhna padega
```

### Real World Example (Chai Shop Metaphor)

Jaise aap dukaan jaate ho aur kehte ho: **"Mujhe 1 kilo chini chahiye"** (type specify kiya)
vs
**"Mujhe kuch chahiye"** (dukandaar ko samajhna padega)

### Code Examples

```typescript
// ✅ Type Annotation with clarity (sahi tareeka)
let age: number = 25;
let name: string = 'Alice';
let isActive: boolean = true;

// Function mein Type Annotation
function add(a: number, b: number): number {
  return a + b;
}

// Call karna
const result = add(5, 10); // ✅ Valid
const result2 = add(5, '10'); // ❌ Error! String nahi de sakte
```

---

## 2️⃣ Type Inference (TypeScript Khud Samajhle)

### Meaning (Matlab)

Type Inference matlab jab hum type explicitly specify nahi karte, lekin TypeScript automatically samajh jata hai ki value kis type ki hai.

**Asaan shabd mein**: TypeScript khud se samajh leta hai

### Illustration (Example)

```
✅ Type Inference (TypeScript khud samajhta hai)
let name = "Alice";  // TypeScript samajh gaya: yeh STRING hai

TypeScript ke dimaag mein:
let name: string = "Alice";  // (automatically)
```

### Real World Example (Photo Metaphor)

Jaise aap kisiko photo dikhate ho aur puchte ho **"Yeh kaun hai?"** to woh dekh kar samajh jata hai, aapko explicitly batane ki zaroorat nahi.

### Code Examples

```typescript
// Type Inference ke saath
let score = 95; // ✅ TypeScript samajh gaya: number
let status = 'active'; // ✅ TypeScript samajh gaya: string
let isValid = false; // ✅ TypeScript samajh gaya: boolean

// Function mein bhi kaam karta hai
function greet(name: string) {
  return `Hello, ${name}!`; // ✅ Return type: string (automatically)
}

// Wrong kaam nahi ho sakta
score = '95'; // ❌ Error! Pehle number diya tha, ab string de rahe ho
```

| Feature           | Type Annotation      | Type Inference             |
| ----------------- | -------------------- | -------------------------- |
| **Explicit hai?** | ✅ Haan, saaf-saaf   | ❌ Nahi, automatic         |
| **Safe hai?**     | ✅ Zyada safe        | ✅ Bhi safe hai            |
| **Kab karein?**   | Function params mein | Variables jahan obvious ho |

---

## 3️⃣ Union Types (Multiple Types Ek Saath)

### Meaning (Matlab)

Union Type matlab jab ek variable **ek se zyada types** ki values rakh sakta hai.

**Asaan shabd mein**: "Ya toh yeh type, ya phir woh type"

### Illustration (Example)

```
Union Type banate hain: | (pipe) se

let id: number | string;  // ✅ Ya toh number, ya string

id = 123;        // ✅ Valid (number)
id = "ABC123";   // ✅ Valid (string)
id = true;       // ❌ Invalid (boolean nahi tha define kiya)
```

### Real World Example (ATM Machine Metaphor)

ATM Machine: Aap **ya toh Debit Card daal sakte ho, ya Credit Card**. Dono kaam karenge, par doosri cheezen nahi.

### Code Examples

```typescript
// Union Type - Example 1
let userId: number | string;
userId = 101; // ✅ Valid
userId = 'user-101'; // ✅ Valid

// Union Type - Example 2 (Specific Values)
let status: 'success' | 'pending' | 'error';
status = 'success'; // ✅ Valid
status = 'pending'; // ✅ Valid
status = 'failed'; // ❌ Invalid

// Function ke saath
function processId(id: number | string) {
  console.log(`ID: ${id}`);
}

processId(123); // ✅ Valid
processId('ABC'); // ✅ Valid
```

---

## 4️⃣ Any Type (Kuch Bhi Hone De)

### Meaning (Matlab)

Any Type matlab "koi bhi type ho sakta hai". Yeh TypeScript ke type-checking ko band kar deta hai.

**Asaan shabd mein**: TypeScript ko nahi pata ki value kis type ki hogi, toh hum `any` use karte hain.

⚠️ **Careful**: `any` ka use kam karein! Yeh unsafe hai.

### Illustration (Example)

```
❌ Any Type (DANGER ZONE!)

let data: any;
data = 123;         // ✅ OK
data = "text";      // ✅ OK
data = true;        // ✅ OK
data = {x: 1};      // ✅ OK

// Lekin yeh problem create kar sakta hai:
data.toUpperCase(); // ❌ Runtime Error! (agar data number hai)
```

### Real World Example (Mystery Box Metaphor)

Jaise aap ek box mein kuch bhi rakh do - seb, santara, mehendi. Aap nahi jaante andar kya hai, to shayad sada fal nikal aaye.

### Code Examples

```typescript
// ❌ Any Type (bura tareeka)
let something: any;
something = 100;
something = 'hello';
something.toUpperCase(); // ❌ Agar number hai to Error!

// ✅ Union Type (accha tareeka)
let value: number | string;
value = 100;
value = 'hello';

// Ab Type Narrowing karna padega (baad mein dekhenge)
if (typeof value === 'string') {
  value.toUpperCase(); // ✅ Ab Safe hai
}
```

---

## 5️⃣ Unknown Type (Pata Nahi, Lekin Safe)

### Meaning (Matlab)

Unknown Type bhi `any` jaisa hai, lekin **zyada safe hai**. Unknown ko use karne se pehle type check karna padta hai.

**Asaan shabd mein**: "Mujhe pata nahi type kya hai, lekin main safe rahunga"

### Illustration (Example)

```
Unknown Type (Safe Any)

let value: unknown;
value = 123;        // ✅ OK
value = "text";     // ✅ OK

// Lekin property access ke liye CHECK karna padta hai!
if (typeof value === 'string') {
  value.toUpperCase();  // ✅ Ab Safe hai
}
```

### Real World Example (Mystery Gift Box Metaphor)

Aap ek mysterious gift box paate ho. Aap bina dekhe andar kuch nikal nahi sakte - pehle khol kar dekhna hoga.

### Code Examples

```typescript
// ✅ Unknown Type (secure)
let mystery: unknown;
mystery = 100;
mystery = "text";

// Use karne se pehle type check karna hoga
if (typeof mystery === 'string') {
  console.log(mystery.toUpperCase());  // ✅ Safe
}

if (typeof mystery === 'number') {
  console.log(mystery.toFixed(2));     // ✅ Safe
}

| Type | `any` | `unknown` |
|------|-------|----------|
| Type checking | ❌ Nahi | ✅ Haan |
| Safe hai? | ❌ Nahi | ✅ Haan |
| Recommended | ❌ Avoid karein | ✅ Prefer karein |
```

---

## 6️⃣ Type Narrowing (Filter Karke Exact Type Nikalna)

### Meaning (Matlab)

Type Narrowing matlab Union Type ko **filter karke** exact type par pahucha na.

**Asaan shabd mein**: "Union mein se exact type nikaal lena"

### Illustration (Example)

```
Narrowing ko samjhein:

1. Shuruaat mein:    id: number | string
2. Check ke baad:    id: string (narrowed!)

if (typeof id === 'string') {
  // Yahan TypeScript samajh gaya: id ek string hai
  id.toUpperCase();  // ✅ String methods use kar sakte ho
}
```

### Real World Example (Finding Friend in Crowd Metaphor)

Jaise aap ek badi bheed mein (number | string) apne dost ko khoj rahe ho. Jab aap pehchan jate ho "Yeh wahi hai!", tab ab aap sirf uske saath baat karte ho.

### Code Examples

```typescript
// Type Narrowing Example
function process(input: string | number) {
  // Narrowing using typeof
  if (typeof input === 'string') {
    console.log(input.toUpperCase()); // ✅ String methods
  } else {
    console.log(input.toFixed(2)); // ✅ Number methods
  }
}

process('hello'); // ✅ OUTPUT: HELLO
process(3.14159); // ✅ OUTPUT: 3.14
```

---

## 7️⃣ Type Guards (Narrowing Karne Wale Tools)

### Meaning (Matlab)

Type Guards hain expressions ya functions jo **type narrowing karne mein madad karte hain**.

**Asaan shabd mein**: Joh tools hain narrowing karne ke liye.

### Illustration (Example)

```
Type Guards ke prakaar:

1. typeof       - Primitives ke liye (string, number, boolean)
2. instanceof   - Classes ke liye
3. in operator  - Object properties ke liye
4. Custom guards - Functions jo type check karte hain
```

### Code Examples

```typescript
// Type Guard 1: typeof
let value: string | number = 'hello';
if (typeof value === 'string') {
  console.log(value.length); // ✅ String property
}

// Type Guard 2: instanceof
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

let animal: Dog | Cat = new Dog();
if (animal instanceof Dog) {
  animal.bark(); // ✅ Dog method
} else {
  animal.meow(); // ✅ Cat method
}

// Type Guard 3: in operator
interface Bird {
  fly: () => void;
}
interface Fish {
  swim: () => void;
}

function move(creature: Bird | Fish) {
  if ('fly' in creature) {
    creature.fly(); // ✅ Bird method
  } else {
    creature.swim(); // ✅ Fish method
  }
}

// Type Guard 4: Custom Guard Function
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

let data: unknown = 'hello';
if (isString(data)) {
  console.log(data.toUpperCase()); // ✅ Safe
}
```

---

## 8️⃣ Type Assertion (Force Se Type Batana)

### Meaning (Matlab)

Type Assertion matlab TypeScript ko explicitly batana ki ek value kis type ki hai.

**Asaan shabd mein**: "Main TypeScript ko force karta hoon ki yeh value is type ki hai"

⚠️ **Careful**: Assertion galat ho sakta hai, toh dhyan dein!

### Illustration (Example)

```
Type Assertion ke do tareeke:

1. <type> value       // Angle bracket syntax
2. value as type      // as keyword (recommended)

let value: unknown = "hello";
let str: string = value as string;  // Asserting ki value string hai
```

### Code Examples

```typescript
// Type Assertion Example 1
let data: unknown = 'TypeScript';

// Angle bracket syntax
let str1: string = <string>data;

// as keyword (better hai)
let str2: string = data as string;

console.log(str2.toUpperCase()); // ✅ TYPESCRIPT

// Type Assertion Example 2
interface User {
  name: string;
  age: number;
}

let obj: unknown = { name: 'Alice', age: 25 };
let user: User = obj as User;

console.log(user.name); // ✅ Alice

// ❌ Galat Assertion (Type Error)
let number: number = 42;
let wrongStr: string = number as string; // ❌ Type Error! related nahi hain
```

---

## 9️⃣ Never Type (Asambhav Sthiti)

### Meaning (Matlab)

Never Type matlab ek value **kabhi nahi ho sakta** ya function **kabhi return nahi karta**.

**Asaan shabd mein**: "Yeh asambhav sthiti hai" ya "Yeh function kabhi khatm nahi hoga"

### Illustration (Example)

```
Never Type ke upyog:

1. Asambhav sthiti ko handle karna
2. Function jo hamesha error throw kare
3. Infinite loop

function impossible(): never {
  throw new Error("Yeh function kabhi return nahi karega");
}
```

### Code Examples

```typescript
// Example 1: Impossible Case (Role-based Access)
function handleRole(role: 'admin' | 'user') {
  switch (role) {
    case 'admin':
      console.log('Admin access');
      break;
    case 'user':
      console.log('User access');
      break;
    default:
      const exhaustive: never = role;
      // Agar koi naya role add karein, to TypeScript error dega!
      throw new Error(`Unknown role: ${exhaustive}`);
  }
}

// Example 2: Function that Never Returns
function fail(message: string): never {
  throw new Error(message);
}

// Example 3: Infinite Loop
function infiniteLoop(): never {
  while (true) {
    console.log('Running forever...');
  }
}

// Usage
const result = handleRole('admin'); // ✅ Works

// Agar naya case bhool jayen, to TypeScript warning dega!
```

---

## 🔟 Try-Catch Block (Error Handling)

### Meaning (Matlab)

Try-Catch matlab code mein jo error aaye, usko handle karna.

**Asaan shabd mein**: "Kuch code karo, agar error aaye to usko sambhalo"

### Illustration (Example)

```
Try-Catch ka Flow:

try {
  // Yahan code chalta hai
  // Agar error aaye, to catch mein jayega
} catch (error) {
  // Error ko handle karo
} finally {
  // Yeh hamesha chalega (optional)
}
```

### Code Examples

```typescript
// Try-Catch Example 1
try {
  const result = 10 / 0; // Math mein error nahi
  console.log(result); // ✅ Infinity
} catch (error) {
  console.error('Error:', error);
} finally {
  console.log('Finally block'); // ✅ Hamesha chalega
}

// Try-Catch Example 2
function parseJSON(jsonString: string) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.error('Invalid JSON:', error);
    return null;
  }
}

parseJSON('{"name": "Alice"}'); // ✅ {name: "Alice"}
parseJSON('invalid'); // ✅ null + error message

// Try-Catch with Type Narrowing
try {
  throw new Error('Something went wrong!');
} catch (error) {
  // error ko as Error assert karna padta hai
  if (error instanceof Error) {
    console.log(error.message); // ✅ "Something went wrong!"
  }
}
```

---

## Real-World Example: Chai Dukaan Order System

```typescript
// ============================================
// Chai ki Dukaan - Order Processing System
// ============================================

// Type Definitions
type ChaiType = 'masala' | 'ginger' | 'green';
type OrderStatus = 'pending' | 'preparing' | 'ready' | 'error';

interface ChaiOrder {
  type: ChaiType;
  quantity: number;
  sugarLevel: 'low' | 'medium' | 'high';
}

// Type Guard
function isValidOrder(data: unknown): data is ChaiOrder {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as ChaiOrder).type === 'string' &&
    typeof (data as ChaiOrder).quantity === 'number' &&
    typeof (data as ChaiOrder).sugarLevel === 'string'
  );
}

// Main Function with Type Narrowing
function processChaiOrder(input: string | ChaiOrder): void {
  let order: ChaiOrder | null = null;
  let status: OrderStatus = 'pending';

  try {
    // Type Narrowing
    if (typeof input === 'string') {
      const parsed = JSON.parse(input);

      // Type Guard
      if (isValidOrder(parsed)) {
        order = parsed;
      } else {
        status = 'error';
        throw new Error('Invalid order format');
      }
    } else if (isValidOrder(input)) {
      order = input;
    } else {
      status = 'error';
      throw new Error('Invalid order object');
    }

    // Process Order
    if (order) {
      status = 'preparing';
      console.log(`Preparing ${order.quantity} cups of ${order.type} chai`);
      console.log(`Sugar level: ${order.sugarLevel}`);
      status = 'ready';
    }
  } catch (error) {
    status = 'error';
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unknown error occurred');
    }
  } finally {
    console.log(`Order Status: ${status}`);
  }
}

// Testing
processChaiOrder({
  type: 'masala',
  quantity: 2,
  sugarLevel: 'medium',
});

processChaiOrder('{"type":"ginger","quantity":1,"sugarLevel":"high"}');

processChaiOrder('invalid json'); // Error handling
```

---

## 1️⃣1️⃣ Difference Between `type` and `interface`

### Meaning (Matlab)

`type` aur `interface` dono custom types banane ke liye use hote hain, but inka use-case thoda alag hota hai.

**Asaan shabd mein**:

- `interface` zyada useful hota hai object shape define karne ke liye, specially large apps mein.
- `type` zyada flexible hota hai, kyunki unions, intersections, primitives wagaira bhi define kar sakta hai.

### Quick Difference Table

| Point                    | `type`                       | `interface`                      |
| ------------------------ | ---------------------------- | -------------------------------- |
| Object define kar sakte? | ✅ Haan                      | ✅ Haan                          |
| Union bana sakte?        | ✅ Haan                      | ❌ Direct nahi                   |
| Intersection bana sakte? | ✅ Haan                      | ✅ `extends` se similar behavior |
| Declaration merging      | ❌ Nahi                      | ✅ Haan                          |
| Primitive alias          | ✅ Haan (`type ID = string`) | ❌ Nahi                          |
| Recommended for          | Complex type logic           | Object/API contracts             |

### Illustration (Example)

```typescript
// type: flexible
type ID = string | number;

type UserType = {
  name: string;
  age: number;
};

// interface: object contract
interface UserInterface {
  name: string;
  age: number;
}
```

### Real World Example (Team Rules Metaphor)

Socho `interface` team policy document jaisa hai, jisme rules baad mein extend ya merge ho sakte hain.
`type` ek smart label jaisa hai jo alag-alag cheezon ko combine karke quick formula bana deta hai.

### Code Examples

```typescript
// 1) interface with extension (common in backend/frontend models)
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: 'Ravi',
  employeeId: 101,
};

// 2) type with union + intersection
type Role = 'admin' | 'user' | 'guest';

type Contact = {
  email: string;
};

type Profile = {
  name: string;
};

type UserProfile = Profile & Contact;

const user: UserProfile = {
  name: 'Aman',
  email: 'aman@example.com',
};

// 3) declaration merging (sirf interface mein)
interface Settings {
  theme: string;
}

interface Settings {
  language: string;
}

const appSettings: Settings = {
  theme: 'dark',
  language: 'en',
};
```

### Final Rule of Thumb

- Agar aap object models, class contracts, ya API response structure bana rahe ho -> `interface` choose karo.
- Agar aap unions, utility combinations, mapped types, ya advanced type composition kar rahe ho -> `type` choose karo.

---

## Quick Summary Chart (Teji Se Yaad Rakhne Ke Liye)

| Concept               | Kya Hai                   | Kab Use Karein                   | Example                                |
| --------------------- | ------------------------- | -------------------------------- | -------------------------------------- |
| **Type Annotation**   | Saaf-saaf type batana     | Functions, important vars        | `let age: number = 25`                 |
| **Type Inference**    | TypeScript khud samjhe    | Simple variables                 | `let name = "Alice"`                   |
| **Union Types**       | Ek se zyada types         | Flexible parameters              | `id: number \| string`                 |
| **Any Type**          | Koi bhi type ho sakta hai | ❌ Avoid karein                  | `let data: any`                        |
| **Unknown Type**      | Koi bhi type (safe)       | Unknown input                    | `let value: unknown`                   |
| **Type Narrowing**    | Union ko filter karna     | Conditional checks               | `typeof input === 'string'`            |
| **Type Guards**       | Type check tools          | instanceof, typeof               | `if (value instanceof Dog)`            |
| **Type Assertion**    | TypeScript ko force       | TS galti kare to                 | `data as string`                       |
| **Type vs Interface** | Dono custom type banate   | Contract vs flexible composition | `interface User {}` / `type User = {}` |
| **Never Type**        | Asambhav sthiti           | Error handling                   | `const x: never = role;`               |
| **Try-Catch**         | Error handling            | Runtime errors                   | `try { } catch (e) { }`                |

---

## Learning Path (Sikhne Ka Rasta)

```
1. Type Annotation Shuru Karein
   ⬇️
2. Type Inference Samjhein
   ⬇️
3. Union Types Sikhein
   ⬇️
4. Type Narrowing & Guards
   ⬇️
5. Advanced Types (Unknown, Never, Assertion)
   ⬇️
6. Error Handling (Try-Catch)
   ⬇️
7. Real-World Projects
```

---

**Ab aap TypeScript Types ko puri tarah samajh gaye hain!** ✅
