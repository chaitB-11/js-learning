
console.log(`====================WAP to count the total number of 'a' character`);
var word="javascript";
var counter=0;
for (let index = 0; index< word.length; index++) {
    var ch=word.charAt(index);
    if (ch=="a") {
       counter++; 
    }
}
console.log(`total number of a is:${counter}`);


console.log(`=============WAP to count the vowels=============`);
var str=`I am very good IT developer`;
var vowels ="aeiou";
var counter=0;
for (let index = 0; index < str.length; index++) {
var ch=str.charAt(index);
var chLowerCase=ch.toLowerCase();
if (vowels.includes(chLowerCase)) {
    counter++;
}
    
}

console.log(`Total number of vowels :${counter}`);
console.log(`================Reverse the string=============`);
var word= "Javascript";
var result="";
for (let index = word.length-1; index >=0; index--) {
var ch =word.charAt(index);
    result=result+ch;
}
console.log(result);



