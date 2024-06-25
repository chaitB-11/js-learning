console.log(`=============1. sum of the numbers from 1 to 5==========`);
var sum=0;
for (let index = 1; index <=5; index++) {
    sum=sum+index;

    
}
console.log(`sum of the numbers are :${sum}`);


console.log(`=============2. sum of cube of no. 1 to 5==========`);
var sumOfCube=0;
for (let i = 1; i <=5; i++) {
    var cube=i * i* i;
    sumOfCube = sumOfCube+ cube;
    
}
console.log(`sum of cube of the no is :${sumOfCube}`);

console.log(`=============3.odd position characters===============`);

function oddPositionedChar(str){
for (let index = 0; index<str.length; index++) {
    
    var ch = str.charAt(index);
    if (index%2==1 && ch!='') {
        console.log(ch);
    }
}


}
oddPositionedChar("Hard work always pays back");
oddPositionedChar("Soon I will be UI IT Champ");






