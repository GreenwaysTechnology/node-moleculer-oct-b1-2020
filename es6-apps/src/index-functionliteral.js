//function is literal-value like nos,strings, and booleans

let a = 10;

//function declaration; function can be assigned to a variable.
//once if you assign function to a variable , that variable can be used
//to call /invoke that function.

//way-1
function sayHello(name = 'foo') {
    console.log('hello', name);
    return 'welcome'
}
//function is assigned to a variable
let hello = sayHello;
console.log(hello('ram'));

//way -2 ;anonymous function

let hai = function(name = 'foo') {
    console.log('hai', name);
};
hai();

console.log(typeof hai)
console.log(typeof hello)
/////////////////////////////////////////////////