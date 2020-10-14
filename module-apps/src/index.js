const OrderService = require('./services/OrderService');

////////////////////////////////////////////////
const service = new OrderService();
const { findAll } = new OrderService();


function startApp() {
  //  findAllProducts();
 
}
startApp();

function findAllProducts() {
    //console.log(service.findAll())
    console.log(findAll())
}