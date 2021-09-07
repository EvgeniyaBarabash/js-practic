/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */
const promise = new Promise((resolve, reject)=>{
    const example = Math.random()>0.5;
    setTimeout(()=>{
        if(example){
        resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)')
        }
        reject('Промис выполнился с ошибкой (отклонён, rejected)')},2000)
    });
    promise.then(onFulField, onRejected);
        function onFulField(result){
            console.log(`✅ ${result}`);
        }
        function onRejected(error){
            console.log(`❌ ${error}`);
        };

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise.then(result=>{
console.log(result);
return 5;
}).then(x=>{
    console.log(x);
}
).catch(error=>console.log(error)).finally(()=>console.log('Я буду выполнен в любои случае'));


/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */
// const makeOrder = dish=>{
//     const DELAY = 1000;
//     return new Promise((resolve, reject)=>{
//         const passed = Math.random()>0.5;
//         setTimeout(()=>{
//             if(passed){
//                 resolve(`✅ Вот ваш заказ: ${dish}`);
//             }
//             reject('❌ Упс, у нас закончились продукты');
//         },DELAY)
//         });
// }
// makeOrder('пирожок').then(onMakeOrderSucces).catch(onMakeOrderError);
// function onMakeOrderSucces(result){
// console.log(result);
// };
// function onMakeOrderError(error){
// console.log(error);
// };


/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

const makeOrder = dish=>{
    return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
};
makeOrder('пирожок').then(onMakeOrderSucces)
function onMakeOrderSucces(result){
    console.log(result);
    };
    function onMakeOrderError(error){
    console.log(error);
    };