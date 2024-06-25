
const isPrepared=true;
const notesPromise=new Promise((resolve,reject)=>{
if (isPrepared) {
    console.log(`Buddies take this one and also prepare your notes`);
}
});

notesPromise.then((success)=>{

console.log(success);
console.log("Thank You so much sir");
}).catch((failure)=>{

    console.log(failure);
    console.log("Not fair Sir");
}).finally(()=>{

        console.log("Finally need to prepare my notes");
 });











