const ORDERS = require('../mock-data/Orders')

/**
 * function require(fileName){
 *  let exports = {};
 *  let module.exports;
 * 
 *  if(module.exports){
 * 
 *    return code
 *  }
 * 
 *   return exports
 * 
 * 
 * }
 */


class OrderService {
    constructor(){
        console.log('order service is called!!!')
    }
    findAll(){
        return ORDERS;
    }
    save(todo){
      //save logic
      return 'order has been saved'
    }
    update(order){
        //update logic
    }
    remove(orderId){
        //remove todo from todos array.
    }
}

module.exports = OrderService;