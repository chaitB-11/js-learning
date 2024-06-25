let arrayRollNum=[10,20,30,40,50,90];

console.log(arrayRollNum);
console.log(`length of the array ,It means total number of elements in the array`);

console.log(arrayRollNum.length);
console.log(`===================1. Accessing array values using index========================`);
const element0th=arrayRollNum[0];
console.log(element0th);
const len=arrayRollNum.length;
console.log(arrayRollNum[len-1]);

console.log(`========================2. Update array values using index=============================`);

arrayRollNum[5]=100;
console.log(arrayRollNum);
console.log(`========================3.  add elements at the end of the array =============================`);

let array= [10,20,30,40,50,90];
console.log(`original array :${array}`);
array.push(200);
console.log(`After push:${array}`);

console.log(`========================3.  add elements at the beginning of the array =============================`);
array.unshift(100);
console.log(`After unshift:${array}`);



console.log(`=================Remove elements in the beginning of the array===================`);

array.shift();
console.log(`after shift:${array}`);



console.log(`=================Remove elements in the end of the array===================`);

array.pop();
console.log(`after pop:${array}`);