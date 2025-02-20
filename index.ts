
  function capWord(input: string): string { 
    let capwords: string = input.toUpperCase().trim();
    return capwords;
}
console.log(capWord("Hello"));
  

function isValidNumber(input: unknown): boolean{
  return typeof input === "number" && isFinite(input);
}
console.log(123);

interface User{
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;
}
function create(user: User): string{
  return `User ${user.name} created successfully`;
}
const user1: User = {
  id: 1,
  name: "Mohammed",
  email: "Mohammed@example.com",
  isAdmin: true
};

const user2: User = {
  id: 2,
  name: "Abdulaziz",
  email: "Abdulaziz@gmail.com",
  
}
console.log(create(user1));
console.log(create(user2));