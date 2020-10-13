//code refactoring methods
class Customer {
    //declare instance variables and methods
    constructor(id = 34, name = 'john') {
        this.id = id;//34;
        this.name = name; 'john';
    }
    //methods
    calculateInvoice() {
        return 1000;
    }
}

let cust = new Customer(8999, 'karthik');
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)
/////////////////////////////////////////////////////////////////////////////

let product = {
    id: 1,
    name: 'phone',
    // getQty: function () {
    //     return 100;
    // }
    // getQty: () => 100
    //like class methods syntax
    getQty() {
        return 100;
    }
};
console.log(`id ${product.id}`)
console.log(`Name ${product.name}`)
console.log(`Qty ${product.getQty()}`)