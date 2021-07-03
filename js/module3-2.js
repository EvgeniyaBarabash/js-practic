const product = {
    name:'',
    price: 0,
    guntity: 0,
// methods
showName(){
    console.log(this.name);
},
changeName(value){
    this.name = value
},
showPrice(){
        console.log(this.price);
},
changePrice(newPrice){
    this.price = newPrice;
},
showQuontity(){
    console.log(this.guntity);
},
changeQuontity(count){this.guntity = count;},
    
};
console.log(product);
product.showName();
product.changeName('peach');
product.showName();

product.changePrice(55);
product.showPrice();
product.changeQuontity(3);
product.showQuontity();

// 2task
product.getTotalPrice =function(){
    return this.price*this.guntity;
}
console.log(product.getTotalPrice());
//3 task
// const products =[
//     {name: 'grape', price:80, quantity:2},
//     {name: 'banana', price:30, quantity:5},
//     {name: 'kiwi', price:100, quantity:1.5},
// ]
// let totalPrice = 0;
// for(let i=0; i<products.length; i++){
//     const{price,quantity}=products[i];
// console.log(`${i}`,products[i].price*products[i].quantity);
// totalPrice+=price*quantity;
// }
// console.log(totalPrice);

// 3task


const products = [
  { name: 'Grape', price: 80, quantity: 2 },
  { name: 'Banana', price: 30, quantity: 5 },
  { name: 'Kiwi', price: 100, quantity: 1.5 },
]
let total = 0;
for (let i=0; i<products.length; i++){
    const{price,quantity}=products[i];
 total += price*quantity;
}
console.log(total);


// 4task
const allProducts = [
  { name: 'bread', price: 20, quantity: 100 },
  { name: 'milk 2,5%', price: 30, quantity: 24 },
  { name: 'cheese', price: 300, quantity: 10 },
  { name: 'chorizo', price: 560, quantity: 4 },
  { name: 'lemon', price: 60, quantity: 9 },
  { name: 'lavazza', price: 250, quantity: 24 },
]

// function getProductCost(products, productName, productQuantity){
// for(let i=0; i<products.length; i++){
// const{name, price, quantity}=products[i];
// if (name === productName.toLowerCase()){
//     if(productQuantity<=quantity){
//  return price*productQuantity;
//     }
// }else{
//     return `${productName} is not enough`
// }

// }  
// return `no match any ${productName}`
// };

    
// const getProductCost1 = function (products, productName, productQuantity) {
//   for (let i = 0; i < products.length; i++) {
//     const { name, quantity, price } = products[i]
//     if (name === productName.toLowerCase())
//       return productQuantity > quantity
//         ? `${productName} is not enough`
//         : price * productQuantity
//   }
//   return `no match any ${productName}`
// }

const getProductCost = (products, productName, productQuantity)=>{
    for(let i=0; i<products.length; i++){
const{name, price, quantity}=products[i];
if (name === productName.toLowerCase()){
    if(productQuantity<=quantity){
 return price*productQuantity;
    }
}else{
    return `${productName} is not enough`
}

}  
return `no match any ${productName}`
};



console.log(getProductCost(allProducts, 'Bread', 10))