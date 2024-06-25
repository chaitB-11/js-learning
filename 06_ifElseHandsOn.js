console.log(`========================== 1. To check passed argument=======================`);
function isEvenOrOdd(num){


if (num%2==0) {
    console.log(`Given number :${num}  is even `);
} else {
    console.log(`Given number:${num} is ODD`);
}
}
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);

console.log(`=================================== 2. Who is Eligible For Vote=========================`);

function eligibility(num){


    if (num>17) {
        console.log(`Person :${num}  is eligible for voting. `);
    } else {
        console.log(`Person:${num} is not eligible for voting`);
    }
    }
     eligibility(18);
     eligibility(20);
     eligibility(17);
     eligibility(40);
