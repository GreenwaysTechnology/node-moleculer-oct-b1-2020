
//code -  could be variable declaration,class declaration,function declaration.

//if you want share any code , you have to pack the code

//in order to pack code, cjs (node) provides two variables- exports,module.exports
//exports

/**
 * exports is a variable declared inside require function
 * 
 * dummy code
 * 
 * function require(fileName){
 *  let exports={};
 * 
 * 
 *  exports.name='subramanian';  
 * 
 *  return exports
 * }
 * const result = require('./mylib')
 * 
 * 
 */

exports.firstName = 'subramanian';
exports.lastName = 'Murugan';
exports.isActive = true;
exports.salary = 1000;
exports.sayGreet = function () {
    return 'greet'
}
exports.skills = ['java', 'javascript', 'node'];
exports.address = {
    city: 'Coimbatore'
}