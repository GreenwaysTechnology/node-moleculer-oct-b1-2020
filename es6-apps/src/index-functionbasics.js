//code is encapuslated inside function.

//basic function declaration;
//function is keyword to declare function
//sayHello is name of the function
//{} - function body
function sayHello() {
    console.log('Hello')
}
//call/invoke/execute the function.
sayHello();
//function with some logic
function validate() {
    let name = 'ram';
    let password = 'ram';
    let response = (name === 'ram') && (password === 'ram') ? 'valid' : 'invalid'
    console.log(response);
}
validate();
//function args and parameters

//name is argument
//default arg; if arg is undefined, you can give default value.
function sayHai(name = 'foo') {
    console.log(`Hai ${name}`)
}
//Subramanian is parameter
sayHai('Subramanian')
//undefined is parameter
sayHai()

function multiply(a = 1, b = 1) {
    let response = a * b;
    console.log(`Multiply ${response}`);
}
multiply(10, 10);
multiply();
////////////////////////////////////////////////////////////////////////////
//i want function that , how many parameters i am going to pass, i dont know in advance
//rest operator...(var args)
function log(...message) {
    console.log(message)
}
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')
//////////////////////////////////////////////////////////////////////////////////
//return values
function getA() {
    return 10;
}
let value = getA()
console.log(value);
console.log(getA())

function getB() {
    let b = 10;
    return b;
}
console.log(getB());
function calculate(a = 1, b = 1) {
    return a * b;
}
console.log(calculate(4, 5))

function isValid() {
    return; // undefined
}
console.log(isValid() ? 'valid' : 'invalid')
////////////////////////////////////////////////////////////////////////////////////




