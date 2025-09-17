const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Lấy first, bỏ qua phần tử 2, lấy third (mặc định 0 nếu không có), và phần còn lại
const [first, , third = 0, ...restAges] = ages;

console.log(first);     // 33
console.log(third);     // 20
console.log(restAges);  // [16]
console.log(restAges.length); // 1