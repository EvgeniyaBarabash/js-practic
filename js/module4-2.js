// Замыкания

// function createCounter() {
//   // LEXICAL ENVIRONMENT
//   let current = 0;
//   function increment(value) {
//     return (current += value);
//   }
//   function decrement(value) {
//     if (current === 0) return;
//     return (current -= value);
//   }
//   // LEXICAL ENVIRONMENT
//   return { increment, decrement };
// }
// export default createCounter;

// CARRING(карированная функция, матрешка)

function getPrice(discount, price){
    return(price*(100-parseInt(discount)))/100;

};
console.log(getPrice('10%',10));
console.log(getPrice('10%',100));

// перепишем через карирование

function getTotalPrice(discount){
    return (price)=>{
        return(price*(100-parseInt(discount)))/100;}

    };
    const discount10 = getTotalPrice('10%');
    console.log(discount10);
    console.log(discount10(10));
    console.log(discount10(100));
    console.log(discount10(1000));
    const discount15 = getTotalPrice('15%');
        console.log(discount15);
    console.log(discount15(10));
    console.log(discount15(100));
    console.log(discount15(1000));

    // THIS

    const user = {
        name: 'Sandra',
        age:31,
        showInfo(){
            console.log(`user ${this.name} is ${this.age}`);
        },
    };
    // console.log(this.name);
    // user.showInfo();


//     function showThisByDeclar(){
//         console.log(this);
//     };
//     showThisByDeclar();
//     user.newMetod = showThisByDeclar;
//  user.newMetod();


//  Привязка контекста (обьекта с кем работаем  этом вызове)

// 1-мгновенный вызов(на том же уровне)- сall || apply

// apply(object)

function sayHello(){
    console.log(`hello ${this.name}`)
};
// sayHello();  ERROR
// call(object)
sayHello.call(user, 'Rafael', 'gld to see you');
sayHello.call(user, ['Rafael', 'gld to see you']);
// 2если надо предать callback - bind

function getUserInfo(cb){
cb()
};
getUserInfo(user.showInfo.bind(user));

const user1 = {
    name: 'Paris',
    age: 33,

};
getUserInfo(user.showInfo.bind(user1));

const user2 = {
    name: 'Salma',
    age: 18,

};
getUserInfo(user.showInfo.bind(user2));