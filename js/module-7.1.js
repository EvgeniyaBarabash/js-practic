const listElem = document.querySelector('#categories');
console.log(listElem);
console.log(listElem.children);
console.log(listElem.children[1]);
const firstLinkElem = listElem.firstElementChild;
console.log(firstLinkElem);
console.log(listElem.lastElementChild);
const linkElem = listElem.querySelectorAll('.item');
console.log(linkElem);

// linkElem.classList.add('.super-ccol');
const titleElem = document.querySelector('.title');
console.log(titleElem);
console.log(titleElem.textContent);
titleElem.textContent='я сладкий пирожечек';
console.log(titleElem);
console.log(titleElem.classList);
titleElem.classList.add('super-puper')
titleElem.classList.remove('super-puper')
const imgElem=document.querySelector('.image');
console.log(imgElem.src);
console.log(imgElem.getAttribute('src'));
console.log(imgElem.alt);
// imgElem.removeAttribute('src');
console.log(imgElem.hasAttribute('src'));


const actions=document.querySelector('.js-actions');
console.log(actions);
const actionsBtn=document.querySelectorAll('.js-actions button');
console.log(actionsBtn);

console.log(actionsBtn[2]);
console.log(actionsBtn[1].dataset.action);
console.log(actionsBtn[0].dataset.action);
console.log(actionsBtn[0].dataset);



const titleElem1 = document.createElement('h1');

titleElem1.classList.add('.page-title');
titleElem1.textContent = 'Это заголовок страницы';
console.log(titleElem1);

document.body.appendChild(titleElem1);


const imageEl = document.createElement('img');
imageEl.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

imageEl.alt='Orange and White Koi Fish Near Yellow Koi Fish';
imageEl.width = 600;
console.log(imageEl);
document.body.appendChild(imageEl);




const heroElem = document.querySelector('.hero');
// heroElem.appendChild(titleElem1);
// heroElem.appendChild(imageEl);

heroElem.append(titleElem1,imageEl);


// ===========================================
//  Сделаем коллекцию

const colorPicerOptions =[
   {label:'red', color:'#F44336'},
   {label:'green', color:'#4CAF50'},
   {label:'blue', color:'#2196F3'},
   {label:'grey', color:'#607D8B'},
   {label:'pink', color:'#E91E63'},
   {label:'indigo', color:'#3F5185'},
 ];
// 1вариант
  const colorPicerOptionsEl = document.querySelector('.js-color-picker');
 
// const elements = [];
//  for(let i=0; i<colorPicerOptions.length; i++){
//   const option = colorPicerOptions[i];
//   const buttonElem = document.createElement('button');
//   buttonElem.type = 'button';
//   buttonElem.textContent = option.label;
//   buttonElem.style.backgroundColor = option.color;
//  elements.push(buttonElem); 
//  };
//  console.log(elements);
// colorPicerOptionsEl.append(...elements);

// 2вариант

// const elements = colorPicerOptions.map(option=>{
//   const buttonElem = document.createElement('button');
//   buttonElem.type = 'button';
//   buttonElem.textContent = option.label;
//   buttonElem.style.backgroundColor = option.color;
//  return buttonElem; 
// });
// console.log(elements);
// colorPicerOptionsEl.append(...elements);

// 3вариант

const makeColorPicerOptions = options=>{return options.map(option=>{
  const buttonElem = document.createElement('button');
  buttonElem.type = 'button';
  buttonElem.textContent = option.label;
  buttonElem.style.backgroundColor = option.color;
 return buttonElem; 
});
};
const elements = makeColorPicerOptions(colorPicerOptions);
colorPicerOptionsEl.append(...elements);

// +++++++++++++++++++++++++++++
// сделаем коллекцию товаров
const products =[{
  name: 'Сервоприводы',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vitae?',
  price:200,
  available:true,
  onSale:true,
},
{
  name: 'Сервоприводы',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vitae?',
  price:200,
  available:true,
  onSale:true,
},
{
  name: 'Двигатели',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vitae?',
  price:200,
  available:true,
  onSale:true,
},
{
  name: 'Генераторы',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vitae?',
  price:200,
  available:true,
  onSale:true,
}];

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({name,description, price})=>{
  const productEl=document.createElement('article');
  productEl.classList.add('product');

  const titleElem2=document.createElement('h2');
  titleElem2.classList.add('product__name');
  titleElem2.textContent=name;

  const descrEl = document.createElement('p');
  descrEl.classList.add('product__descr');
  descrEl.textContent=description;

  const priceElem = document.createElement('p');
  priceElem.textContent=`Цена ${price} кредитов`;
  priceElem.classList.add('product__price');

  productEl.append(titleElem2,descrEl,priceElem);
  return productEl;
};
console.log(makeProductCard(products[0]));
const elements4 = products.map(makeProductCard);
console.log(elements4);
productsContainerEl.append(...elements4);


// Свойство innerHtml - для того чтобы очистить полностью или заменить поностью
const titleEel= document.querySelector('.title');
// titleEel.innerHTML='<a href="">Это ссылка</a>';
// titleEel.innerHTML='';

// чтобы добавлять что-то новое
titleEel.insertAdjacentHTML('afterbegin', '<a href="">Это ссылка</a>');
titleEel.insertAdjacentHTML('afterend', '<a href="">Это ссылка</a>');

// =====================

// События
const targetBtn = document.querySelector('.js-target-btn');

const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', event=>{
  console.log(event);
  console.log('Вешаю слушателя события на целевую кнопку');
  targetBtn.addEventListener('click', onTargetBtnClick);
});
function onTargetBtnClick(event){
  console.log('Клик по целевой кнопке');
};

removeListenerBtn.addEventListener('click', event=>{
  console.log('Снимаю слушателя события с целевой кнопки');
  targetBtn.removeEventListener('click', onTargetBtnClick);

})



// Именование колбеков для слушателей
// handle*: handleSubjectEvent
function handleTargetButtonClick(){
  console.log('Клик');
};
// Handler*: subjectEventHandler
function targetButtonClickHandler(){
  console.log('Клик');
};
// on*: onSubjectEvent
function onTargetButtonClick(){
  console.log('Клик');
};


// Событие формы

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
  event.preventDefault();

  console.log(event.currentTarget.elements.subscription.value);
  console.log('это сабмит формы');

  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name)=>{
    console.log('onFormSbmit=> name', name);
    console.log('onFormSbmit=> value', value);

  });
};


// События инпутов

const input = document.querySelector('.js-input');
const license = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');
const nameLabel = document.querySelector('.js-button>span');


 const refs = {
  input: document.querySelector('.js-input'),
  license: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
 nameLabel: document.querySelector('.js-button>span'),

 };

//  refs.input.addEventListener('focus', onInputFocus);
 function onInputFocus(){
   console.log('Инпут получил фокус - событие focus');
 }
   function onInputBlur(){
     console.log('Ирпут потерял фокус - событие blur');
    
   };
   
  //  refs.input.addEventListener('blur',onInputBlur);
  //  refs.input.addEventListener('input',onInputChange);
   function onInputChange(event){
     console.log(event.currentTarget.value);
     refs.nameLabel.textContent = event.currentTarget.value;
   }
refs.license.addEventListener('change', onLicenseChange);
function onLicenseChange(event){
console.log(event.currentTarget.checked)
refs.btn.disabled = !event.currentTarget.checked;
}


// Событие клавиатуры

const refs1={
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};
// window.addEventListener('keydown', onKeypress);
window.addEventListener('keypress', onKeypress);
refs1.clearBtn.addEventListener('click', onClearOutput);
function onKeypress(event){
  console.log(event);
  console.log('event.key', event.key);
  refs1.output.textContent+=event.key;
};
function onClearOutput(){
  refs1.output.textContent='';
}



// События мыши






