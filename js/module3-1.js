const obj ={
    // props (key: value;),
name: 'Sandra',
lastName:'Hrevtsova',
age: 30,

};
console.log(obj);
console.log(obj.age);
console.log('name:', obj.name);

// получить значение свойства в обьекте
console.log(obj['name']);
console.log(obj['age']);

// Изменить значение свойства в обьекте
obj.age = 31;
console.log(obj.age);

// добавим свойсьво в обьект
obj.skills = [];
console.log(obj.skills);

obj.skills.push('HTML', 'CSS', 'JS', 'React');
console.log(obj.skills);
console.log(obj);

// удалить свойсво в обьекте
delete obj.age;
console.log(obj.age);
console.log(obj);


// short properties
let pat = 'cat';
const newObj = {pat};
console.log(newObj);

// вычисляемые свойства
let key1 ='name';
let key2='lastName';
let key3 = 'skills';
console.log('key1', obj[key1]); 
console.log('key3', obj[key3]); 


// перебор обьекта
for(let key in obj){
    console.log('key',key);
    console.log('value: ', obj[key]);
}

// новый обькт через креейт наследует свойства от обьект
const newObject = Object.create(obj);
console.log(newObject);

newObject.pat = 'kitten';
// проверяем его свойство или нет
console.log(newObject.hasOwnProperty('pat')); 
console.log(newObject.hasOwnProperty('name'));

// пербор может выдать не его личные свойства
for(let key in newObject){
    if(newObject.hasOwnProperty(key)){
    console.log('newObject key:', key)
}
}


const objKeys = Object.keys(obj);
console.log('objKeys', objKeys);

const objValues = Object.values(obj);
console.log(objValues);

const objEntries = Object.entries(obj);
console.log(objEntries);

// SPREAD - распыление
// распыление элементов массива
const numbers = [1,2,6,87,24,54];
console.log(Math.max(numbers)); 
console.log(Math.max(1,2,6,87,24,54));
console.log(Math.max(...numbers)); 


// сщздание нового массива через распыления исходного
const newNums = [...numbers];
console.log(newNums);
console.log(newNums===numbers);

const bestArray = [...numbers, 'JS', ...newNums.slice(-1)];

console.log(bestArray);


// зфспыление обьктов
 const user = {name: 'Bill'};
 const newUser = {company: ['IBM']};
 const superUser = {...user,  gerder: 'male', ...newUser};
 console.log(superUser);

 function getTotalResult(...scores){
     console.log(scores);
     let total = 0;
     for(let i=0; i<scores.length; i++){
           console.log(scores[i]);
           total += scores[i];
     }
     return total;
 }
 let result = getTotalResult(23,45,87,445,78,25);
 console.log('result',result);
 result = getTotalResult(23,45,87,445,78,25,52,65,87,14);
 console.log('result',result);
 

//  деструктуризация

const myFavouriteMusic = {
    rock:{
        
        bands:['ramstain', 'hrthth'],
        songs:['hello my world'],
    },
};
// 2 уровня деструкторизация
const {rock:{bands, songs}}=myFavouriteMusic;
console.log(bands);
bands.push('Linkin Park');
console.log(bands);
console.log(songs);

// 1 уровня деструкторизация
const {rock} = myFavouriteMusic;
console.log(rock);

