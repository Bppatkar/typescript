# Typescript Tutorial

### step 1: Setup

1. Install Node.js from [here](https://nodejs.org/en/download/)
2. Install TypeScript globally or locally in your project:
   - Globally: `npm install -g typescript`
   - Locally: `npm install --save-dev typescript` // save dev means it will be added to your package.json file under devDependencies , if you dont want to use save dev then you can just use npm install typescript
3. now run `npx tsc --init` to create a tsconfig.json file in your project root directory, this file will contain all the configuration options for the TypeScript compiler.

### step 2: Create a TypeScript file

1. Create a new file with the extension `.ts`, for example `index.ts`.
2. Write some TypeScript code in the file, for example:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
const message = greet('World');
console.log(message);
```

### step 3: Compile TypeScript to JavaScript

1. Run the TypeScript compiler to compile your `.ts` file to `.js`:
   - If you installed TypeScript globally, you can run: `tsc index.ts`
   - If you installed TypeScript locally, you can run: `npx tsc index.ts`

   [we already run a command npx tsc --init to create a tsconfig.json file, so we can just run npx tsc to compile all the .ts files in our project, this will look for the tsconfig.json file and use the configuration options specified in it to compile the TypeScript code.]
   for example, if you have a tsconfig.json file with the following configuration:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "es5",
    "module": "commonjs"
  },
  "include": ["src/**/*"]
}
```

This configuration will compile all the `.ts` files in the `src` directory and output the compiled JavaScript files in the `dist` directory.

2. After running the compile command, you should see a new file named `index.js` in the same directory as your `index.ts` file (or in the `dist` directory if you have specified an output directory in your tsconfig.json).

### step 4: Run the compiled JavaScript

1. You can run the compiled JavaScript file using Node.js:
   - If you compiled to `index.js`, run: `node index.js`
   - If you compiled to a different directory, run: `node dist/index.js`
2. You should see the output in the console, which in this case will be: `Hello, World!`

#### step 5: Watch for changes

1. You can use the `--watch` flag to automatically recompile your TypeScript files whenever you make changes:
   - If you installed TypeScript globally, run: `tsc --watch`
   - If you installed TypeScript locally, run: `npx tsc --watch`
2. This will keep the TypeScript compiler running in the background and it will automatically recompile your files whenever you save changes to your `.ts` files.

### Conclusion

This is a basic setup for using TypeScript in your project. You can explore more advanced features

---

### Summary

firstly you need to do npm init -y to create a package.json file in your project, then you can follow the steps mentioned above to set up TypeScript in your project and start writing TypeScript code.

1. Install Typescript in your project using npm. [npm install --save-dev typescript]
2. Create a tsconfig.json file using `npx tsc --init` command.
3. Create a TypeScript file with .ts extension and write your code in it.
4. Compile your TypeScript code to JavaScript using `npx tsc` command 
   <!-- it will create a corresponding .js file -->
   4.1 or you can use `npx tsc --watch` to automatically recompile your code whenever you make changes.
5. Run the compiled JavaScript file using Node.js.
