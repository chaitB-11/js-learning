// const num =5;
// let fact=1;
// for (let i = 5; i>=1;i-- ){

//     fact=fact*i
// }
    
// console.log(fact);

console.log(`=============WAP to find factorial of number===========`);

function factorialofNum(num){
let fact=1;
for (let i =num; i>=1; i--) {
   fact=fact*i
}
console.log(fact);
}
 console.log(`factorial of 3 is :`);
 factorialofNum(3);
 console.log(`=====================================================================================================================`);
 console.log(`factorial of 4 is :`);
 factorialofNum(4);
 console.log(`=====================================================================================================================`);

 console.log(`factorial of 9 is :`);
factorialofNum(9);
console.log(`=====================================================================================================================`);

console.log(`factorial of 111 is :`);
factorialofNum(111);
console.log(`=====================================================================================================================`);

console.log(`factorial of 10 is :`);
factorialofNum(10);
console.log(`=====================================================================================================================`);
