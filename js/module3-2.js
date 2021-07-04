const product = {
  name: "",
  price: 0,
  guntity: 0,
  // methods
  showName() {
    console.log(this.name);
  },
  changeName(value) {
    this.name = value;
  },
  showPrice() {
    console.log(this.price);
  },
  changePrice(newPrice) {
    this.price = newPrice;
  },
  showQuontity() {
    console.log(this.guntity);
  },
  changeQuontity(count) {
    this.guntity = count;
  },
};
console.log(product);
product.showName();
product.changeName("peach");
product.showName();

product.changePrice(55);
product.showPrice();
product.changeQuontity(3);
product.showQuontity();

// 2task
product.getTotalPrice = function () {
  return this.price * this.guntity;
};
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
  { name: "Grape", price: 80, quantity: 2 },
  { name: "Banana", price: 30, quantity: 5 },
  { name: "Kiwi", price: 100, quantity: 1.5 },
];
let total = 0;
for (let i = 0; i < products.length; i++) {
  const { price, quantity } = products[i];
  total += price * quantity;
}
console.log(total);

// 4task
const allProducts = [
  { name: "bread", price: 20, quantity: 100 },
  { name: "milk 2,5%", price: 30, quantity: 24 },
  { name: "cheese", price: 300, quantity: 10 },
  { name: "chorizo", price: 560, quantity: 4 },
  { name: "lemon", price: 60, quantity: 9 },
  { name: "lavazza", price: 250, quantity: 24 },
];

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

const getProductCost = (products, productName, productQuantity) => {
  for (let i = 0; i < products.length; i++) {
    const { name, price, quantity } = products[i];
    if (name === productName.toLowerCase()) {
      if (productQuantity <= quantity) {
        return price * productQuantity;
      }
    } else {
      return `${productName} is not enough`;
    }
  }
  return `no match any ${productName}`;
};

console.log(getProductCost(allProducts, "Bread", 10));

// 5task из массива в обьект
// создать функцию, которая принимает различное  количество
// аргументов и возвращает обьект со свойствами из полученных
// аргументов

function createObject() {
  console.log(arguments);
  const [name, age, skills] = arguments;
  console.log(name, age, skills);
  const obj = { name, age, skills };
  return obj;
}
const createObject1 = function () {
  const [name, age, skills] = arguments;
  return { name, age, skills };
};
const createObject2 = (...params) => {
  // console.log(params);
  // const[name,age,skills]=params;
  // return {name,age,skills};
  const obj = {};
  for (let i = 0; i < params.length; i++) {
    obj[`key-${i + 1}`] = params[i];
  }
  return obj;
};
console.log(createObject("Sandra", 30, ["HTML", "CSS", "Js"]));
console.log(createObject1("Sandra", 30, ["HTML", "CSS", "Js"]));
console.log(
  createObject2("Sandra", 30, ["HTML", "CSS", "Js"], { friends: [] })
);

// task6
// ADDITIONAL

const obj = {
  x: 2,
  y: 3,
  z: null,
  result: 0,
  showObj() {
    return this.result;
  },
  changeZ(val) {
    this.z = val;
  },
  getPow() {
    return this.x ** this.y;
  },
  changeX(val) {
    this.x = val;
  },
};
obj.changeZ(5555);
console.log(obj.z);
console.log(obj.showObj);
console.log(obj.getPow(5, 2));
obj.changeX(3);
console.log(obj.x);
console.log(obj.getPow());

//  7task Корзина товара
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
for(const item of this.items){
    if(item.name===product.name){
        item.quantity+=1;
        return;
    }
}
      const newProduct = {...product, quantity:1,};
    return this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i++) {
      const { name } = items[i];
      if (name === productName) {
        console.log(`нашли такой продукт`, productName);
        console.log(`index`, i);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
 countTotalPrice(){
     const {items}=this;
     let total=0;
     for(const {price, quantity} of items){
         total += price*quantity;
     }
     return total;
 },
 
};
console.log(cart.getItems());
cart.add({ name: "orange", price: 20 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "kiwi", price: 30 });
cart.add({ name: "grape", price: 40 });

console.log(cart.getItems());
cart.remove("orange");
// cart.clear();
// console.log(cart.getItems());
console.log(cart.countTotalPrice());
cart.add({ name: "orange", price: 20 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "kiwi", price: 30 });
cart.add({ name: "grape", price: 40 });
cart.add({ name: "apple", price: 50 });
console.log(cart.getItems());
console.log(cart.countTotalPrice());
