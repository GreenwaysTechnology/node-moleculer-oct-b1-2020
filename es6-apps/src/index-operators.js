//operators;
//equal operators 
//  ==, === ,!=,!==

let a = 100;
let b = 100;
if (a == b) {
    console.log('equal')
} else {
    console.log('not equal')
}


//value is 100 but type is number
let x = "100";
let y = 100;
if (x === y) {
    console.log('equal')
} else {
    console.log('not equal')
}

/**
 * == compares only value
 * === compares value + type ->recommended operator.
 */
//////////////////////////////////////////////////////////////////////////////////

//tenary operator ; to replace if ...else lader

x === y ? console.log('equal') : console.log('not equal')

let firstName = '';

let response = firstName ? 'You have firstName' : 'You dont have'
console.log(response);
/////////////////////////////////////////////////////////////////////////////////

let message = '';

/**
 * if first operand (message) is truthy,then result would be first itself,else second
 */
let result = message || 'hello'
console.log(result);
