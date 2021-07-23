const numbers=[2,5,7,24,89,6,3,5,24,7,5,2,45,12];
const words = ['hello', 'js', 'html', 'node'];
//возвращаем массив - нет повтора
function getUniqueValues(arr){
    console.log(arr);
    const newArr=[];
    for(let i=0; i<arr.length; i++){
let item=arr[i];
// console.log(item);
if(!newArr.includes(item)){
    newArr.push(item);
}
    }
    return newArr;
}
console.log(getUniqueValues(numbers));


// 2 вариант

function getUnVal(arr){
return arr.filter((elem, index,array)=>
    array.indexOf(elem)===index
);
};
console.log(getUnVal(numbers));

// 2 task
// массив находит уникальные значения и удаляет 
// и оставляет только повторы
function deleteUniqueValues(arr){
    const x = [];
    for(let i=0; i<arr.length; i++){
let item=arr[i];
console.log(x[item]);
if(x[item]===undefined){
    x[item]=0
}
x[item]+=1;
    }
    console.log(typeof x, x);
    const results=[];
    for(let i=0; i<arr.length; i++){
        console.log(`значение исходника: ${arr[i]}-повторений ${x[arr[i]]}`);
    if(x[arr[i]]>1){
        results.push(arr[i]);
    }
    }
return results;

};
console.log(deleteUniqueValues(numbers));
deleteUniqueValues(words);

// 2 вариант

function delUnVal(arr){
    return arr.filter((elem, index,array)=>{
        console.log('currentInd', array.indexOf(elem)-array.lastIndexOf(elem));
let currentInd=array.indexOf(elem);
let lastind=array.lastIndexOf(elem);
let condition = currentInd!==lastind;
return condition;
    })
};
console.log(delUnVal(numbers));

const delUn=(arr)=>arr.filter((el,idx,array)=>array.indexOf(el)!==array.lastIndexOf(el));
console.log(delUn(numbers));

// Медиана(из масива значение взять посредине)

const median=[1,2,3,4,5];
// median([3,6,10,15,20,99]);
function getMiddleValue(arr){
if(arr.length%2!==0){
    console.log(arr.length/2);
    let preElem = arr.length/2-1;
    let nextElem = arr.length/2+1;
    console.log(preElem, nextElem);
    console.log('2 средних элемента', arr[preElem]+arr[nextElem]);
    let sum = arr[preElem]+arr[nextElem];
    let middleValue = sum/2;
    return middleValue;
}
if(arr.length%2!==0){
    console.log(Math.floor(arr.length/2));
    let idx =Math.floor(arr.length/2);
    return arr[idx];
}
};
getMiddleValue(median);

return [...arr].sort((a,z)=>{
    const result = a.name[0]>z.name[0]
});