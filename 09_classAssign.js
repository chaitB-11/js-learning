class Vehicle {
    // Data Members Or Properties or Attributes or States
    constructor(firstName, lastName, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }

    //Member Function or Methods or Behavior or Actions
    details(){
        console.log(`Details: ${this.firstName}, ${this.lastName}, ${this.city}`);
    }
}
console.log(`================Top Cars Famous in INDIA=============`);
const BMW = new Vehicle("BMW", "3 Series-6,060,000", "India");
BMW.details();
console.log(`---------------------------------------------------------------------`);
const fortuner= new Vehicle("Fortuner", "33,5000", "India");
fortuner.details();

console.log(`---------------------------------------------------------------------`);
const Mercedes = new Vehicle("Mercedes-Benz-A", "4,050,000", "India");
Mercedes.details();
console.log(`---------------------------------------------------------------------`);
const Ford = new Vehicle("Ford -Ecosport", "8,19,000", "India");
Ford.details();
console.log(`---------------------------------------------------------------------`);





















