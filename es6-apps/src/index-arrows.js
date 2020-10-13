// const sayHello = function () {
//     console.log('hello');
// };
const sayHello = () => {
    console.log('hello');
};
sayHello();
//params and args
const sayHai = (name = 'subramanian') => {
    console.log(`hai ${name}`);
};
sayHai();
///////////////////////////////////////////////////////////////////////////////////
//code refactoring
let sayGreet;
sayGreet = () => {
    console.log('sayGreet')
};
sayGreet();
//if function having single body;we can remove {}
sayGreet = () => console.log('sayGreet')
sayGreet();
//multi parameter with default value
sayGreet = (name = 'ram', message = 'hello') => console.log(`${message} ${name}`)
sayGreet();
//single parameter without default value;remove ()
sayGreet = message => console.log(`${message}`)
sayGreet('hello');
//returning value
let add;
add = (a = 1, b = 1) => {
    return a + b;
}
console.log(add(1, 2))
//if body has only return statement, remove {} and return keyword
add = (a = 1, b = 1) => a + b;
console.log(add(1, 2))

//single parameter and return the same.
let getValue = value => value;
console.log(getValue(10));
///////////////////////////////////////////////////////////////////////////////////
//function as parameter

let socketHandler;
socketHandler = handler => handler()


socketHandler(() => console.log('socket handler'))
let myHandler = () => console.log('socket handler');

socketHandler(myHandler)
//////////////////////////////////////////////////////////////////////////////////
//how to return function from another function

// function myfun(){
//     return function(){
//         console.log('inner')
//     }
// }
let myfun;
myfun = () => {
    return () => {
        console.log('inner')
    }
}
myfun()()
myfun = () => () => console.log('inner')
myfun()()