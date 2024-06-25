console.log("====1.Two function with no arguments and no return values");
function show(){
console.log("Before learned HTML,CSS,GitHUB");
console.log("Now I am learning Javascript");
    
}
show();

console.log("=======2. Personal Details with arguments======= ");
function details(chaitali,babar,sinhgad){
   
    var first = "chaitali";
    console.log("first name is:",first);
    
    var last = "babar";
    console.log("last name is:",last);
    
    var college = "sinhgad";
    console.log("college name is:",college);
}
details();

console.log("===========3.WAF with 3 parametrs===========");
function parameter(num){
var addition=num+num+num;
console.log("the result is =",addition);
return addition;
}
var par =parameter(10.23,600,40);
console.log("addition is",par);
