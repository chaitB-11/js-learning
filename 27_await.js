function giveMeMoney(){

console.log(`let me arrrange for you`);

};

try {
    const Promise= giveMeMoney();
    console.log(Promise);
}
catch(error){
    console.log( error);
}

console.log("thank you");
console.log("===================async function==============");
   async function giveMeMoney(){

    console.log(`let me arrrange for you`);
    return "take this 25000";
};
const result=giveMeMoney();
console.log(result);





