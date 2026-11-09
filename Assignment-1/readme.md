# TypeScript & OOP Assignment
 
## Overview
This repository contains my solutions for Assignment 1. It covers optional and default parameters, union types with type narrowing, readonly tuples, generics with rest parameters and `keyof`, interfaces, OOP with access modifiers and inheritance, and Promises.
 
# Questtions:

## Problem 1:

Create a function `multiplyValue` that accepts a number `value` and an optional number `multiplier`.

* If `multiplier` is provided, return `value` multiplied by `multiplier`.
* If `multiplier` is not provided (`undefined`), return `value` multiplied by `2` by default.

### Requirements:
* Handle `0` properly when passed as `multiplier` (multiplying by `0` must return `0`).

```ts
// Sample Input:
multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);

// Sample Output:
20
50
0
```

## Problem 2:

Create a function `processInput` that accepts a value which may be a **string**, **number**, or **boolean**, and returns a formatted result based on the value's type:

* If the input is a **string** → trim any leading/trailing spaces and return it in **lowercase**.
* If the input is a **number** → return the number multiplied by **10**.
* If the input is a **boolean** → return `"Active"` if `true`, or `"Inactive"` if `false`.

### Requirements:
* Write the correct union type for the function parameter and the return type.
* Use type narrowing (`typeof`) to handle each case safely.

```ts
// Sample Input:
processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);

// Sample Output:
"typescript"
70
"Active"
"Inactive"
```

## Problem 3:

Create a function `formatCoordinate` that accepts a **readonly tuple** representing a coordinate and location name in the exact order `[latitude, longitude, locationName]` (`[number, number, string]`), and returns a formatted location string.

### Requirements:
* Apply the `readonly` modifier to the tuple parameter so it cannot be mutated inside the function.
* Return the exact string format: `"Location: [locationName] ([latitude], [longitude])"` without rounding the numbers.

```ts
// Sample Input:
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);

// Sample Output:
"Location: Dhaka (23.81, 90.41)"
"Location: Chittagong (22.35, 91.78)"
```

## Problem 4:

Create a generic function `concatenateArrays` that accepts multiple arrays of the **same type** `T` using rest parameters (`...arrays: T[][]`) and returns a single combined array containing all elements in the order they were passed.

### Requirements:
* Must use a generic type parameter `<T>` and rest parameters.
* Do not use `any`.

```ts
// Sample Input:
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);

// Sample Output:
["a", "b", "c", "d"]
[1, 2, 3, 4, 5]
```

## Problem 5:

Define an interface `Course` with the following properties:
* `title` (string)
* `students` (number)
* `isPublished` (boolean)

Then, create a function `getPopularCourses` that accepts an array of `Course` objects and a `minStudents` number. The function should return a **new array** containing only the courses where `isPublished` is `true` **and** `students` is greater than or equal to `minStudents`.

### Requirements:
* Define the `Course` interface with the exact property names and types.
* Do not mutate the original array.

```ts
// Sample Input:
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

getPopularCourses(courses, 80);

// Sample Output:
[
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
]
```

## Problem 6:

Write a generic function `pluckValues` that accepts an array of objects (`items: T[]`) and a valid property key of those objects (`key: K`), and returns a new array (`T[K][]`) containing the values of that specific property from each object in the same order.

### Requirements:
* Use generics with the `keyof` constraint (`<T, K extends keyof T>`).
* Do not use `any`.

```ts
// Sample Input:
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

pluckValues(users, "name");
pluckValues(users, "id");

// Sample Output:
["Rakib", "Sadia", "Tariq"]
[1, 2, 3]
```

## Problem 7:

Create an `Employee` class and a `Manager` subclass following these exact specifications:

1. **`Employee` class:**
   * Has a `protected` property `name` (`string`) and a `private` property `baseSalary` (`number`).
   * Constructor accepts `(name: string, baseSalary: number)` in that exact order.
   * Has a method `getDetails()` that returns `"Employee: [name], Base Salary: [baseSalary]"`.

2. **`Manager` class (extends `Employee`):**
   * Adds a `private` property `department` (`string`).
   * Constructor accepts `(name: string, baseSalary: number, department: string)` in that exact order and calls `super(name, baseSalary)`.
   * Has a method `getRoleInfo()` that returns `"Manager of [department]: [name]"`.

### Requirements:
* Use `protected` and `private` access modifiers as specified.
* Return the exact string formats shown in the sample output.

```ts
// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();

// Sample Output:
"Employee: Alice, Base Salary: 50000"
"Manager of Engineering: Alice"
```

## Problem 8:

Create an async function `validateAgeAsync` that accepts a number `age` and returns a `Promise<string>`:

* If `age` is **18 or above**, resolve after **1 second** (`1000` ms) with the string `"Access Granted"`.
* If `age` is **less than 18**, reject immediately with `new Error("Access Denied: Must be 18 or older")`.

### Requirements:
* Explicitly type the return value as `Promise<string>`.
* Use `new Promise` with `setTimeout` (or `async/await`) and reject using an `Error` instance (`new Error(...)`).

```ts
// Sample Input 1:
await validateAgeAsync(20);

// Sample Output 1 (resolves after 1 second):
"Access Granted"

// Sample Input 2:
await validateAgeAsync(15);

// Sample Output 2 (rejects with Error):
Error: Access Denied: Must be 18 or older
```

## Blog Task (10 Marks)

Write two separate, technically detailed blog posts on **any 2 of the following questions**:

1. What are the core differences between `type` aliases and `interface` in TypeScript? When should you choose one over the other?
2. How does TypeScript's type hierarchy work with `any`, `unknown`, and `never`? Why is `unknown` always preferred over `any`?
3. What is **Type Narrowing** in TypeScript? Provide practical examples using `typeof`, `instanceof`, and the `in` operator.
4. How do **Generics** work in TypeScript, and how do they help when working with asynchronous `Promise<T>` responses?
5. Explain how Access Modifiers (`public`, `private`, `protected`, and `readonly`) work in TypeScript OOP with examples.
6. What happens to TypeScript code under the hood during compilation (`tsc`), and what role does `tsconfig.json` play?
7. Provide a practical example of combining **Union (`|`)** and **Intersection (`&`)** types in TypeScript.

# Answers
All code is in [`solutions.ts`](./solutions.ts).

# Blog Posts
- [Type Aliases vs Interfaces in TypeScript](./type-vs-interface.md)
- [How Access Modifiers work in TypeScript OOP](./access-modifiers.md)
  