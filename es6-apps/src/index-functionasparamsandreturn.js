//how to pass function as parameter to another function.

function add(a, b) {
    return a + b;
}

let res;
res = add(10, 10);
console.log(res);
let x = 10;
let y = 20;
res = add(x, y);

function connect(handler) {
    handler();
}
//function as  a parameter
connect(function () {
    console.log('i am function')
});
let myhandler = function () {
    console.log('i am another function')
};
connect(myhandler);
////////////////////////////////////////////////////////////////////////////////
//parameter to handlers and return value

function requestHandler(handler) {
    //passing parameter
    let value = handler('response');
    console.log(value);
}
requestHandler(function (res) {
    console.log(`i am with ${res}`)
    return 'done!'
});

let mynewHandler = function (res) {
    console.log(`i am with ${res}`)
    return 'done!'
};
requestHandler(mynewHandler);
////////////////////////////////////////////////////////////////////////
let socketHandler = function (handler) {
    //passing parameter
    let value = handler('response from socket');
    console.log(value);
};
socketHandler(function (res) {
    console.log(res);
    return 'done socket handler'
});
////////////////////////////////////////////////////////////////////////////////////

//how to return function from another function.

function outerfunction() {
    console.log('outer function')

    // return function innerfunction() {
    //     console.log('inner function')
    // }
    return function (message) {
        console.log('inner function',message)
    }
    //innerfunction()

}
let myfunc = outerfunction()
myfunc('hello');

outerfunction()('hai');

















