console.log(`=====================1. Traverse array ==============`);
let array=[10,15,20,30,40];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log( element);
}

console.log(`=====================2. Traverse array in reverse order ==============`);
for (let index = array.length-1; index >=0; index--) {
    const element = array[index];
    console.log( element);
}

console.log(`=====================3. Total sum the array elements==============`);
let sum=0;
for (let index = array.length-1; index >=0; index--) {
    const element = array[index];
    sum=sum+element;
    console.log(`total sum is `);
}
console.log(sum);

console.log(`================4.Log the even numbers============`);
let arrayNum=[28,34,45,56,78];
for (let index = 0; index < array.length; index++) {
    const element = arrayNum[index];
    if (element%2==0) {
        console.log(element);
    }
    
}

console.log(`================5.Log the Odd numbers============`);
let arrayValue=[21,34,55,78,93,45];
for (let index = 0; index < array.length; index++) {
    const element = arrayValue[index];
    if (element%2!==0) {
        console.log(element);
    }
    
}
console.log(`================6.Slice============`);

let arrayV=[12,34,45,56,67];
const sliceFrom2= arrayV.slice(2);
console.log(sliceFrom2);








