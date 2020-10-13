//how create object ; using function.

function Employee() {
    //declare instance variables and methods
    this.id = 1;
    this.name = 'ram';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//constructor call
//emp is reference variable
let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)

//es 6 syntax.
class Customer {
    //declare instance variables and methods
    id = 34;
    name = 'john';
    //methods
    calculateInvoice = function () {
        return 1000;
    }
}
let cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)

////////////////////////////////////////////////////////////////////////////////
//literal syntax.
let product = {
    id: 1,
    name: 'phone',
    getQty: function () {
        return 100;
    }
};
console.log(`id ${product.id}`)
console.log(`Name ${product.name}`)
console.log(`Qty ${product.getQty()}`)











