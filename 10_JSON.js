const employeeJSON=`{
"id"=121,
"name"="Billgates",
"designation"="CEO",
"DOB"="02/9/1969",
"is married"="true",
"address"= {
"street"="wakad",
"city"="LA",
"pin"="234567",
"country"=USA,
}
}`
console.log(typeof employeeJSON);
console.log(employeeJSON);
console.log(`===========JSON.parse============`);
const employee = JSON.parse(employeeJSON);
console.log(typeof employee);
console.log(employee);




















