// CALLBACK function
// const doMath = function(a,b,callback){
//     const result = callback(a,b)
//     console.log(result);
// };
// const add = function(x,y){
//     return x+y;
// };
// const sub =function(x,y){
//     return x-y;
// };
// doMath(2,5,add);
// doMath(25,21,sub);

// инлайновая функция
const doMath = function(a,b,callback){
    const result = callback(a,b)
    console.log(result);
};
doMath(2,5,function(x,y){
    return x+y;
});
doMath(25,21,function(x,y){
    return x-y;
});


// Отложенный вызов: регистрация событий
// (код который произойдет после клики на кнопку)
// сonst buttonRef = document.querySelector('.js-button');
// const handleBtnClick = function(){
//     console.log(`Клик по кнопке`);
// };
// buttonRef.addEventListener('click',handleBtnClick);


// Отложенный вызов: геолокация
//  const onGetPositionSuccess = function(position){
//      console.log(`Это вызов  onGetPositionSuccess`);
//      console.log(position);
//  };
//  const onGetPositionError = function(error){
//       console.log(`Это вызов  onGetPositionError`)
//       console.log(error);
//  };
//  window.navigator.geolocation.getCurrentPosition(
//      onGetPositionSuccess,
//      onGetPositionError,
//  );

//  Отложенный вызов: интервалы
// const callback = function(){
//     console.log(`Через 2 секунды внутри колбека в таймауте`);
// };
// console.log(`В коде пред таймаутом`);
// setTimeout(callback, 2000);


// Work with BACKEND
// const onRequestSuccess = function(responce){
//     console.log(`Вызов функции onRequestSuccess после успевшего ответа бекенда`);
// console.log(responce);
// };

// fetch('https://')
// .then(res=>res.json())
// .then(onRequestSuccess);


const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);