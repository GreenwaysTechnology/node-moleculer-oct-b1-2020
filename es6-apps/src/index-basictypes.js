//how to declare variables, initailize values(literals).

//es 5 style. -strings

//var is keyword,message is variable,"Hello is literal"
var message = "Hello";
//es 6 ; strings - "",'',``(back tick notation-es 6)
let firstName = "Subramanian";
let lastName = 'Murugan';
//string concatenation 
console.log("Message" + message);
console.log("Message", message);
//`${variableName}` - string interpolation
console.log(`Message ${message}`);
console.log(`Name ${firstName} ${lastName}`)
//back tick in multi line string;
let title = 'IBM-index'
let doc = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;

console.log(doc);
/////////////////////////////////////////////////////////////////////////////

//numbers - 64 bit size -aka double

let salary = 10000;
console.log(`Salary ${salary}`);
let totalSalary = salary * 100
console.log(`Total salary ${salary}`);
//////////////////////////////////////////////////////////////////////////////
//booleans ; true /false
let isActive = true; //false
console.log(`isActive ${isActive}`);
//////////////////////////////////////////////////////////////////////////////
//undefined; if variable declared but not initalized with any valid literals
let cost;
console.log(`cost ${cost}`);
/////////////////////////////////////////////////////////////////////////////////
//NaN - not a number; it is numerical error code.during numerical computation, js engine
//may throw error - NaN ; 
//nan is not valid value, it is error , need to be fixed if you get.

//when you will get NaN.
// if you do compuation against undefined variables.

let totalCost = cost * 100;
console.log(`Total Cost ${totalCost}`);

// when you do type conversion ; string to number.
//type conversion; implict and explict

//salary is now string because "" but value is number
let qty = "1000";
//implicit conversion; before computation, variable is converted into number...
let totalQty = qty * 100;
console.log(`Total Qty ${totalQty}`);
//explicit conversion syntax
totalQty = parseFloat(qty) * 100;
console.log(`Total Qty ${totalQty}`);

//NaN and typeconversion
let count="$10";
let totalCount = count * 12;
console.log(`Total Count ${totalCount}`);
///////////////////////////////////////////////////////////////////////////////

let avg = 100/ 0;
console.log(`Avg ${avg}`);
///////////////////////////////////////////////////////////////////////////////







































