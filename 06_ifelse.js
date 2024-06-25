

function isEven(num){

var num=10;
console.log(`Condition before if block`);
if(num%2==0){
    console.log(`EVEN number`);
}

console.log(`Condition  after if block`);
}
isEven(1);
isEven(11);

console.log(`=================ifelse block==============`);
var isEvenOrOdd = function(num){ if(num%2==0){
    console.log(`Even number`);
}
 else {
    console.log(`Odd number`);
}
}
isEvenOrOdd (3);
