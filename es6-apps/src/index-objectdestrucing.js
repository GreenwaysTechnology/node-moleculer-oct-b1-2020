//object destructing ; breaking object into properties.

//object properties ; instance variables and methods.

/**
function printEmployee(employee) {
    console.log(`id : ${employee.id}`)
    console.log(`name : ${employee.name}`)
    console.log(`City : ${employee.address.city}`)
}
 */
//what if i have many properties to be printed, every time employee.propname
// function printEmployee(employee) {
//     //object destructing syntax
//     const { id, name, address } = employee;
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
//
// function printEmployee({ id, name, address }) {
//     //object destructing syntax
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
const printEmployee = ({ id, name, address: { city } }) => {
    //object destructing syntax
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
};

printEmployee({ id: 1, name: 'Subramanian', address: { city: 'coimbatore' } })
/////////////////////////////////////////////////////////////////////////////////////

//how to return object and how to destructure it.

function getProduct() {
    return {
        id: 1,
        name: 'iphone'
    };
}
console.log(getProduct());

//how to configure dynamic properties for object

function getProductV2(id = 1, name = 'iphone') {
    return {
        id: id,
        name: name
    };
}
console.log(getProductV2());
console.log(getProductV2(2, 'Tv'));


function getProductV3(id = 1, name = 'iphone') {
    //if object key and local variable same, make it one
    return {
        id,
        name
    };
}
console.log(getProductV3());

//arrow version
const getProductV4 = (id = 1, name = 'iphone') => ({
    id,
    name
});

console.log(getProductV4());
////////////////////////////////////////////////////////////////////////////////////

class OrderService {
    constructor() {

    }
    findAll() {
        return 'findAll'
    }
    save() {
        return 'save'
    }
}
const service = new OrderService();
console.log(service.findAll());
console.log(service.save());

//object destructing
const { findAll, save } = new OrderService();
console.log(findAll());
console.log(save());
///////////////////////////////////////////////////////////////////////////////

const { log } = console;

log('Hello')









