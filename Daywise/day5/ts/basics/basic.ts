// Basic Types
let isDone: boolean = false;
let count: number = 42;
let username: string = "Alice";
let list: number[] = [1, 2, 3];
let dynamicValue: any = 4;

// Interface
interface User {
  name: string;
  id: number;
  email?: string; // Optional property
}

const user: User = {
  name: "Bob",
  id: 1,
};

// Function with Type Annotations
function add(x: number, y: number): number {
  return x + y;
}

// Arrow Function
const multiply = (a: number, b: number): number => a * b;

// Union Types
let result: string | number;
result = "Success";
result = 200;

// Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// Class with Access Modifiers
class Point {
  private x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getCoords(): string {
    return `${this.x}, ${this.y}`;
  }
}

// Type Alias
type ID = string | number;
let userId: ID = "abc-123";
