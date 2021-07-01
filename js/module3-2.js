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
const products =[
    {name: 'grape', price:80, quantity:2},
    {name: 'banana', price:30, quantity:5},
    {name: 'kiwi', price:100, quantity:1.5},
]
let totalPrice = 0;
for(let i=0; i<products.length; i++){
    const{price,quantity}=products[i];
console.log(`${i}`,products[i].price*products[i].quantity);
totalPrice+=price*quantity;
}
console.log(totalPrice);

// 3task

