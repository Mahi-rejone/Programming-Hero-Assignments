# Difference between type aliases and interface

## Introduction 
In TypeScript, `Type` and `Interface` are used to define a data type. In the initial phase, there might look similar, but they have distinct uses. 
`Interface is mostly used for objects` and  `Types are used for literals unions, tuples and premitive type declaration`. 

## Details
Types alias can be used for unions, tuples, primitives, and intersections, which an interface cannot do directly. But the type alias cannot be merged once it is declared.

```ts
type Status = "active" | "inactive";
type Admin = User & { role: string };
```
The above example cannot be represented by an interface. But an interface represents the structure of an object and can be inherited using `extends`. And it supports declaration merging, meaning if you declare the interface again, both declarations will be merged together.

```ts
interface User { id: number }
interface User { name: string }
const user: User = { id: 1, name: "Mahi" };
```

## Conclusion
Use  `interface` for object shapes and public APIs that others may extend. Choose `type` for unions, tuples, intersections, and computed types.