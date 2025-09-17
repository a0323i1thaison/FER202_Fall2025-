function sum(...nums) {
  return nums
    .map(Number)                 
    .filter(n => !isNaN(n))      
    .reduce((acc, cur) => acc + cur, 0);
}

function avg(...nums) {
  const validNums = nums
    .map(Number)
    .filter(n => !isNaN(n));

  if (validNums.length === 0) return 0;

  const total = validNums.reduce((acc, cur) => acc + cur, 0);
  return (total / validNums.length).toFixed(2); 
}

// In ra kết quả
console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 'x', 4));     // 5
console.log(avg(1, 2, 3, 4));    // "2.50"
console.log(avg());              // 0