// Section 1: Type Annotations & Functions
function capitalizeWords(input: string): string {
  return input.toUpperCase().trim(); // Converts the entire string to uppercase
}

console.log(capitalizeWords("Mohammed Alharbi")); // "MOHAMMED ALHARBI"


// Task 2: Number Validator Function
function isValidNumber(input: unknown): boolean {
  return typeof input === "number" && isFinite(input);
}
console.log(isValidNumber(123));  // true
console.log(isValidNumber("abc"));  // false

// Section 2: Interfaces & Object Types
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // Optional property
}

function createUser(user: User): string {
  return `User ${user.name} created successfully`;
}

const user1: User = { id: 1, name: "Mohammed", email: "Mohammed@example.com", isAdmin: true };
const user2: User = { id: 2, name: "Abdulaziz", email: "Abdulaziz@gmail.com" };

console.log(createUser(user1)); // "User Mohammed created successfully"
console.log(createUser(user2)); // "User Abdulaziz created successfully"

// Section 3: Classes & OOP
class Product {
  constructor(
      public name: string,
      private price: number,
      public category: string
  ) {}

  getDiscountedPrice(discount: number): number {
      return this.price - (this.price * discount) / 100;
  }
}

const product1 = new Product("Laptop", 1000, "Electronics");
console.log(product1.getDiscountedPrice(10)); // 900

// Section 4: Generics & Utility Types
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterArray(numbers, num => num % 2 === 0)); // [2, 4, 6]

// Section 5: Fetch & Display Users


async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch users");

    const users: User[] = await response.json();
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

// Call function
fetchUsers().then(users => console.log(users));
