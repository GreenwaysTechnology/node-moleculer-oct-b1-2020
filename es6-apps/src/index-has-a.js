
class Product {
    constructor(pid = '1', pname = 'pname') {
        this.pid = pid;
        this.pname = pname
    }
}
class Order {
    constructor(orderId = '0A001', product = new Product()) {
        this.orderId = orderId;
        //has-a
        this.product = product;
    }
}
let order;
order = new Order();
console.log(`Id ${order.orderId} ${order.product.pid} ${order.product.pname}`)
order = new Order('0AB123', new Product('2', name = 'Toys'));
console.log(`Id ${order.orderId} ${order.product.pid} ${order.product.pname}`)
//////////////////////////////////////////////////////////////////////////////

let customer = {
    id: 1,
    name: 'Subramanian',
    //has-a ;nested object
    address: {
        city: 'Coimbatore'
    }
};
console.log(customer)









