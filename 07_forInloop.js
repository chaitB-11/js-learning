var array=[10,23,34,45,56];

for (const index in array ){
   console.log(array[index]);
}


console.log(`===========for of loop============`);
for (const element of array) {
    console.log(element);
}

console.log(`================Join method===========`);
const result =array.join("-");
console.log(result);








