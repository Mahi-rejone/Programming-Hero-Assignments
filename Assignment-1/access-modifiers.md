# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers decide which parts of a class can be reached from outside. Access modifiers protect data inside make code safer and keep the classs interface clean. TypeScript gives you `public` `private` `protected` and `readonly`.

## Details

Members are `public` by default and can be accessed everywhere. A `private` member can only be accessed inside its class. A `protected` member can be accessed inside the class and any subclasses. Not from outside.

```ts

class Employee {
    title: string = "Developer";
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

class Manager extends Employee {
    getName(): string {
    return this.name;
    }
}
const manager = new Manager("Alice" 50000);

```

Here `Manager` can read `name` but never `baseSalary`.

On the other hand a readonly property can only be set at its declaration or, inside the constructor. Any later assignment is a compile-time error`

```ts
class Account {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

## Conclution 
Use `private` to hide internals `protected` to share them with subclasses for the intended API and `readonly` for values that must never change. I note that these checks exist at compile time.
