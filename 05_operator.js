console.log("====================STEP_01=======================");

var greatNum= function(numOne,numTwo){
    var result= numOne>=numTwo?numOne:numTwo;
console.log(`Greater numbers from numbers ${numOne},${numTwo} is ${result}`);
}
 greatNum(10,-10);
 greatNum(800,899);
 console.log("=================STEP_02=======================");
 function isEvenOrOddNum(argOne){
    var result=argOne%2==0 ?true:false;
return result;

 }
var returnValue= isEvenOrOddNum(0);
console.log(`Given number 0 is even:${returnValue}`);
var returnValue= isEvenOrOddNum(29);
console.log(`Given number 29 is even:${returnValue}`);
var returnValue= isEvenOrOddNum(44);
console.log(`Given number 101 is even:${returnValue}`);
var returnValue= isEvenOrOddNum(101);
console.log(`Given number 44 is even:${returnValue}`);

console.log("====================STEP_03=======================");
console.log("Given string Javascript  is even length:true");
console.log("Given string Google Chrome is even length:false");
console.log("Given string Developer Smart  is even length:true");







