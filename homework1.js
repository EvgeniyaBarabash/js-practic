let value5 = "bla bla bla";
let toNumber = Number(value5);
// console.log(`${value5},через конструктор Number: `, toNumber);

toNumber = +value5;
// console.log(`${value5}`, typeof toNumber, toNumber);
const productName = "Droid";
const pricePerItem = 3500;
// const massage =`You picked ${productName}, price per item is ${pricePerItem} credits.`;
// console.log(massage);
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);
function multiply() {
  // Тело функции
  console.log("multiply function invocation");
}
multiply();
function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();
// function add(a, b, c) {
//   return a + b + c;
// }
// const result = add(15, 27, 10);
// const result1 = add(10, 20, 30);
// const result2 = add(5, 10, 15);
//   console.log(`Addition result equals ${result}`);
//   console.log(`Addition result equals ${result1}`);
//    console.log(`Addition result equals ${result2}`);
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  console.log(message);
  // Change code above this line
  return message;
}
makeMessage("Radar", 6150);
makeMessage("Scanner", 3500);
makeMessage("Reactor", 8000);
makeMessage("Engine", 4070);
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;
  console.log(totalPrice);
  // Change code above this line
  return totalPrice;
}
calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  console.log(message);
  // Change code above this line
  return message;
}
makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;
  console.log(passed);
  // Change code above this line
  return passed;
}
isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);
// пароль
function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;
  console.log(isMatch);
  // Change code above this line
  return isMatch;
}
isValidPassword("mangodab3st");
isValidPassword("kiwirul3z");
isValidPassword("jqueryismyjam");

function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }
  console.log(message);
  return message;
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(ordered>available){
//   message = "Not enough goods in stock!";}
//   else{ message = "Order is processed, our manager will contact you.";}
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);
// заказ и сдача
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  const left = customerCredits - totalPrice;
  if (totalPrice > customerCredits) {
    message = `Insufficient funds!`;
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${left} credits left`;
  }
  console.log(message);
  // Change code above this line
  return message;
}
makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);
// пароль
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   console.log(message);
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// склад товаров
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line
  console.log(isInRange);
  return isInRange;
}
isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);

// РАСЧЕТ  СКИДКИ
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
  console.log(canAccessContent);
  return canAccessContent;
}
checkIfCanAccessContent("pro");
checkIfCanAccessContent("starter");
checkIfCanAccessContent("vip");
checkIfCanAccessContent("free");

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }

  // Change code above this line
  console.log(discount);
  return discount;
}
getDiscount(137000);
getDiscount(46900);
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
// console.log(message);
//   // Change code above this line
//   return message;
// }
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";
  console.log(message);
  // Change code above this line
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);

// Проверка пароля, тернарный оператор
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//     console.log(message);
//   return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");

// SWITCH и подписка
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }
  console.log(price);
  // Change code above this line
  return price;
}

getSubscriptionPrice("professional");
getSubscriptionPrice("organization");
getSubscriptionPrice("starter");

// Пароль и 2 варианта IF and SWITCH

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   console.log(message);

//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
  }
  console.log(message);

  return message;
}
checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam");

// Доставка по странам через свитч
function getShippingCost(country) {
  let massage;
  let price;
  switch (country) {
    case "China":
      price = 100;
      massage = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Chile":
      price = 250;
      massage = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Australia":
      price = 170;
      massage = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Jamaica":
      price = 120;
      massage = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      massage = `Sorry, there is no delivery to your country`;
  }
  console.log(massage);
  return massage;
}
getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");

// Длина строки и вывод сообщения
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;
  return message;
}
getNameLength("Poly");
getNameLength("Harambe");
getNameLength("Billy");
getNameLength("Joe");

// Индексация элементов строки
const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

// Метод slice()
function getSubstring(string, length) {
  const substring = string.slice(0, length);
  console.log(substring);
  return substring;
}
getSubstring("Hello world", 3);
getSubstring("Hello world", 6);
getSubstring("Hello world", 8);
getSubstring("Hello world", 11);
getSubstring("Hello world", 0);

function formatMessage(message, maxLength) {
  let result;

  if (message.length <= maxLength) {
    result = message;
  } else {
    result = (message.slice(0, maxLength)+ '...');
  }

  console.log(message);
  return result;
}
formatMessage("Curabitur ligula sapien", 16);
formatMessage("Curabitur ligula sapien", 23);
formatMessage("Vestibulum facilisis purus nec", 20);
formatMessage("Vestibulum facilisis purus nec", 30);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);


// Методы toLowerCase() и toUpperCase()
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); 
console.log(normalizedInput);
  return normalizedInput;
}
normalizeInput("Hello world");
normalizeInput("This ISN'T SpaM");
normalizeInput("Big SALE");



// Метод includes()
function checkForName(fullName, name) {
 const result = fullName.includes(name); 
console.log(result);
  return result;
}
checkForName("Egor Kolbasov", "Egor");
checkForName("Egor Kolbasov", "egor");
checkForName("Egor Kolbasov", "egOr");
checkForName("Egor Kolbasov", "Zhenya");
checkForName("Vadim Nekrasov", "Vadim");
checkForName("Vadim Nekrasov", "vadim");
checkForName("Vadim Nekrasov", "Dima");



// Проверка спама
function checkForSpam(message) {
  let result;
message = message.toLowerCase();
result = message.includes('spam') || message.includes('sale');
console.log(result);
  return result;
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");
