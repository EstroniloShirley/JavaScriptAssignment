// const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.unshift(0);
// arr.reverse();
// x = arr;
// console.log(x);
// console.log(typeof x);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
// x = arr2.slice(0);
x = [...arr1, ...arr2.slice(1)];
console.log(x);
