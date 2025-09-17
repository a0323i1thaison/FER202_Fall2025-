const person = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St"
    // city bị thiếu
  }
};

// Destructuring với giá trị mặc định
const {
  address: {
    street,
    city = "Unknown City"
  } = {} // fallback nếu address undefined
} = person;

console.log(street); // 123 Main St
console.log(city);   // Unknown City

