var people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 }, 
  { name: 'John', age: 40 }, 
  { name: 'Ann', age: 19 }, 
  { name: 'Elisabeth', age: 16 }
];

people
  .filter(p => p.age >= 13 && p.age <= 19)     // lọc tuổi teen
  .map(p => `${p.name} (${p.age})`)            // map sang chuỗi
  .forEach(str => console.log(str));      // in ra từng dòng