var globalVariable=100;
function outer(){
let outerVariable=200;
console.log(globalVariable);
console.log(outerVariable);
let innerFunction= function(){
    const innerVariable=300;
console.log(`innerFunction...`);
console.log(innerVariable);
console.log(globalVariable);
console.log(outerVariable);

}
return innerFunction;
}
const result= outer();
result();
















