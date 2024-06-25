console.log(`========================1.Display the array elements===========================================`);

let array=[11,56,76,87,89,21,22,30,81,100];
array.forEach((currentValue,index,array)=>{
console.log(currentValue,index,array);
});

console.log(`==============================2. Sum The array elements=====================================`);
let sum=0;
array.forEach((element)=>{

sum=sum+element;
});
console.log(sum);

console.log(`=================================3. Log the only even array elements==========================================`);
array.forEach((value)=>{
if (value%2==0) {
    console.log(value);
}
});
console.log(`===================================4. Log the array elements which is multiple of 3===============================`);

array.forEach((element)=>{

if (element%3==0) {
   console.log(element); 
}

});









