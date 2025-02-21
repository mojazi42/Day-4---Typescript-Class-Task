"use strict";
// Section 1: Type Annotations & Functions
function capitalizeWords(input) {
    if (!input.trim())
        return ""; // Handles empty strings
    return input.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("")); // ""
// Task 2: Number Validator Function
function isValidNumber(input) {
    return typeof input === "number" && isFinite(input);
}
console.log(isValidNumber(123)); // true
console.log(isValidNumber("abc")); // false
function createUser(user) {
    return `User ${user.name} created successfully`;
}
const user1 = { id: 1, name: "Mohammed", email: "Mohammed@example.com", isAdmin: true };
const user2 = { id: 2, name: "Abdulaziz", email: "Abdulaziz@gmail.com" };
console.log(createUser(user1)); // "User Mohammed created successfully"
console.log(createUser(user2)); // "User Abdulaziz created successfully"
// Section 3: Classes & OOP
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    getDiscountedPrice(discount) {
        return this.price - (this.price * discount) / 100;
    }
}
const product1 = new Product("Laptop", 1000, "Electronics");
console.log(product1.getDiscountedPrice(10)); // 900
// Section 4: Generics & Utility Types
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterArray(numbers, num => num % 2 === 0)); // [2, 4, 6]
// Section 5: Fetch & Display Users
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok)
            throw new Error("Failed to fetch users");
        const users = await response.json();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }));
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
// Call function
fetchUsers().then(users => console.log(users));
