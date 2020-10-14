
//empty object
let product = {};

//add property during runtime
product.id = 1;
product.name = 'phone'
product.price = 1000;
product.category = {
    type:'electronics'
}

console.log(product)
//update ; js will see that property already exists , if then update starts else add.
product.price = 4000

console.log(product)

//delete object property
delete product.price
console.log(product)

//iteration
for (const key in product) {
    console.log(key, product[key]);
}
