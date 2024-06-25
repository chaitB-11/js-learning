//1. named function no argument and no return value
console.log("===========Show()===========");

function show(){
    console.log("Hey CHAITALI");
}
show();

console.log("===========Square()===========");
function square(){
    console.log("finding the square");
    var result=10*10;
    console.log("the square is:",result);
}
square();

//2. named function with argument and no return value
console.log("===========squareNumber()===========");
function squareNumber(num){
    console.log("finding the square");
    var result=num*num;
    console.log("the square is:",result);
}
squareNumber(9);

// WAF with areaofRectangle and its two arguments namely as length and width
function areaofRectangle(length,width){
    console.log("find area of rectangle");
    var result=length*width;
    console.log("the result is:",result);
}
    areaofRectangle(30,5,7);

//3. named function with argument and return value
// WAF to find the cube of given number

console.log("=======cubeOfnum=======");
function cubeOfNum(num){
console.log("given number is:",num);
var result=num*num*num;
return result;
}
var cube=cubeOfNum(3);
console.log("cube is:", cube);