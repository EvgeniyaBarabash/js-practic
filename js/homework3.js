// 6 
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");


// 7 Добавление свойств
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// 9 Вычисляемые свойства
const emailInputName = 'email';
const passwordInputName = 'password';


const credentials = {
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam"
 
};

// 10 Цикл for...in

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment){
// keys.push(key);
// values.push(apartment[key]);
// };
//  console.log(keys);
//   console.log(values);

// 11  Метод hasOwnProperty()
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//  if (apartment.hasOwnProperty(key)){

//   keys.push(key);
//   values.push(apartment[key]);
// }
// };

// 12

// function countProps(object) {
//   let propCount = 0;
// for(const key in object){
//   if(object.hasOwnProperty(key)){
//   propCount+= countProps.length
//   }
// };
//   return propCount;
// };
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// 13
// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
for(const key of keys){
  values.push(apartment[key]);
 
 };  
 console.log(values);


//  14

function countProps(object) {
  let propCount = 0;
const keys = Object.keys(object);
  for (const key of keys) {
      propCount += 1;
  }
  return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));


// 15
function countTotalSalary(salaries) {
  let totalSalary = 0;
const values = Object.values(salaries);
console.log(values);
  for(const value of values){
    totalSalary += value;
  };
    
  return totalSalary;
  console.log(totalSalary);
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// 16
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
for(const color of colors){
 hexColors.push(color.hex);
 rgbColors.push(color.rgb);
};
console.log(hexColors);
console.log(rgbColors);

// 17
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// for(const product of products){
//   if(product.name===productName){
//     return product.price;
//   }

// }
//   return null;
// }
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


// 19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];
//   for(const product of products){
//     if(!product[propName]){
//   return [];
// }
//    values.push(product[propName]);

//   }
// return values;
// };
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// 20
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
for (const product of products){
if(product.name===productName){
  return product.price*product.quantity;
}
}
return 0;

}
console.log(calculateTotalPrice("Scanner"));

console.log(calculateTotalPrice("Blaster"));


// 21
// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow} = highTemperatures;
// const yesterday1 = yesterday;
// const today1 = today;
// const tomorrow1 = tomorrow;


// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// 23 Изменение имени переменной
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, highIcon= "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",}=highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// console.log(highYesterday);


// 24 Деструктуризация в циклах
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];


// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25 Глубокая деструктуризация
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308


const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
const{
  today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  tomorrow: {low: lowTomorrow, high: highTomorrow, icon:tomorrowIcon= "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},} = forecast;

  console.log(lowToday);


  // 26 Паттерн «Объект настроек»

function calculateMeanTemperature(forecast) {
const{ todayLow, todayHigh, tomorrowHigh, tomorrowLow, } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
};
console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));