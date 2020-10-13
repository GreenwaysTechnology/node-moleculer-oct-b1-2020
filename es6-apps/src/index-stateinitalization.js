//how to initalize the state
//hard coded
//after object creation
//during constructor call.

//hardcoded
// function Employee() {
//     //declare instance variables and methods
//     this.id = 1;
//     this.name = 'ram';
//     //methods
//     this.calculateSalary = function () {
//         return 1000;
//     }
// }


// function Employee() {
//     //declare instance variables and methods
//     this.id = 1;
//     this.name = 'ram';
//     //methods
//     this.calculateSalary = function () {
//         return 1000;
//     }
// }

// //constructor call
// //emp is reference variable
// let emp = new Employee();
// //after object creation
// emp.id = 999999;
// emp.name = 'subramanian'

// console.log(`id ${emp.id}`)
// console.log(`Name ${emp.name}`)
// console.log(`Salary ${emp.calculateSalary()}`)

function Employee(id = 1, name = 'ram') {
    //declare instance variables and methods
    this.id = id;//1;
    this.name = name;//'ram';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}

//constructor call
//emp is reference variable
let emp = new Employee(23, 'john');
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)
/////////////////////////////////////////////////////////////////////////////////
class Customer {
    //declare instance variables and methods
    constructor(id = 34, name = 'john') {
        this.id = id;//34;
        this.name = name; 'john';
    }
    //methods
    calculateInvoice = function () {
        return 1000;
    }
}
// let cust = new Customer();
// cust.id =9000;
// cust.name ='arun'
// console.log(`id ${cust.id}`)
// console.log(`Name ${cust.name}`)
// console.log(`Salary ${cust.calculateInvoice()}`)

let cust = new Customer(8999,'karthik');
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)
//////////////////////////////////////////////////////////////////////////

//literal pattern do not support constructors
let product = {
    id: 1,
    name: 'phone',
    getQty: function () {
        return 100;
    }
};

product.id=9999;
product.name ='auto spares'

console.log(`id ${product.id}`)
console.log(`Name ${product.name}`)
console.log(`Qty ${product.getQty()}`)