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

// DOM Navigation

// console.log(document)
// console.dir(document)
// // console.log(document.body.parentNode) // html
// console.log(document.parentNode) // null

// console.log(document.childNodes)
// // console.log(document.body.children) // 9 elems

// console.log(document.firstChild)
// // console.log(document.firstElementChild)

// console.log(document.lastChild)
// // console.log(document.lastElementChild)

// console.log(document.previousSibling) // null
// console.log(document.body.previousSibling) // #text

// // console.log(document.previousElementSibling)

// console.log(document.body.nextSibling) // null
// console.log(document.nextSibling) // null

// console.log(document.nextElementSibling)

// ========= getting 1 || first DOM node => Object ==============
// document.querySelector("tag-name")
const logoByTag = document.querySelector('span')
// console.log(logoByTag)

// document.querySelector(#id)
const logoByIdquery = document.querySelector('#headerLogo')
// console.log(logoByIdquery)
// // document.getElementById(id)
const logoById = document.getElementById('headerLogo')
// console.log(logoById)

// document.querySelector(.class)
const logoByClass = document.querySelector('.text')
// console.log(logoByClass)

// document.querySelector([attribute])
const logoLink = document.querySelector('[href="./index.html"]')
// console.log(logoLink)

// getting ALL DOM nodes by... => PSEUDOARRAY
// document.querySelectorAll(tag-name)
const allLinksByTag = document.querySelectorAll('a')
// console.log(allLinksByTag)

// document.querySelectorAll(#id) // не актуально, ибо идентификатор должен быть уникальным

// document.querySelectorAll(.class)
const linksClassLink = document.querySelectorAll('.link')
// console.log(linksClassLink)
// // document.getElementsByClassName(class)
const linksByClassName = document.getElementsByClassName('link')
// console.log(linksByClassName)

// document.querySelectorAll([attribute])
const elemsWithSRC = document.querySelectorAll('[src]')
// console.log(elemsWithSRC);

// PROPERTIES of NODES
// attributes => properties
// id, name, value, checked, src, href, hidden, etc...
// console.dir(logoByTag)
// console.log(logoByTag.id)
// console.log(logoByTag.classList)
// console.log(logoByTag.className)

// .attributes => pseudoArr
// console.log(logoByTag.attributes)
// GET
// .hasAttribute(attr) => true || false
// console.log(logoByTag.hasAttribute('name')) // false
// console.log(logoByTag.hasAttribute('id')) // true
// .getAttribute(attr) => attr.value
// console.log(logoByTag.getAttribute('id')) // headerLogo
// SET || CREATE
// .setAttribute(attrName, value)
logoByTag.setAttribute('name', 'logo-span')
// console.log(logoByTag.hasAttribute('name')) // true
// console.log(logoByTag.getAttribute('name')) // headerLogo

logoByTag.setAttribute('data-myAttr1', 'user')
logoByTag.setAttribute('data-myAttr2', '30')
logoByTag.setAttribute('data-myAttr3', 'Js')

// DELETE
// .removeAttribute(attr) => attr.value
logoByTag.removeAttribute('name')
// console.log(logoByTag.hasAttribute('name')) // false
// console.log(logoByTag.attributes)

// // data-attr
// // dadaset = {attr: value}
// console.log(logoByTag.dataset)
// console.log(logoByTag.dataset.myattr1)
// console.log(logoByTag.dataset.myattr2)
// console.log(logoByTag.dataset.myattr3)

// ============= other props ===========
// .textcontent
// console.dir(logoByTag)
// console.log(logoByTag.textContent)
logoByTag.textContent = 'Logo'
// .style => {color, backgroundColor, etc}
logoByTag.style.color = 'pink'

// .classList
// console.log(logoByTag.className)
// console.log(logoByTag.classList)

// .classList.add(className)
logoByTag.classList.add('mainLogo')

// .classList.remove(className)
logoByTag.classList.remove('header-logo')

// .classList.toggle(className)

// .classLict.contains(className)
// console.log(logoByTag.classList.contains('text')) // true
// console.log(logoByTag.classList.contains('header-logo')) // false

// .classLict.replace(oldClassName, newClassName)
logoByTag.classList.replace('mainLogo', 'main-logo')

// GENERATE DOM-elements
// as Object
// document.createElement("tag") => object with props
const headerLogoLink = document.createElement('a')
// console.log(headerLogoLink)

headerLogoLink.setAttribute('href', './index.html')
// console.log(headerLogoLink.attributes)

headerLogoLink.classList.add('logo')
// console.log(headerLogoLink.classList)

headerLogoLink.textContent = 'Studio'
// console.log(headerLogoLink.textContent)

const logoParent = document.getElementById('logo-parent')
// console.log(logoParent)

const logoSpan = document.createElement('span')
logoSpan.classList.add('text')
// console.log(logoSpan)
logoSpan.textContent = 'Web'

// Add elements to HTML
// parent.appendChild(child)
// logoParent.appendChild(headerLogoLink) // в конец родителя

// parent.insertAdjacentElement("beforebegin", child)
// parent.before(...children) // (beforebegin)

// parent.prepend(...children) // (afterbegin)
logoParent.prepend(headerLogoLink)
// headerLogoLink.prepend(logoSpan)
// parent.insertAdjacentElement("afterbegin", child)
headerLogoLink.insertAdjacentElement('afterbegin', logoSpan)
// console.log(headerLogoLink)

// parent.insertAdjacentElement("beforeend", child)
// parent.append(...children) // (beforeend)
// parent.insertAdjacentElement("aftereend", child)
// parent.after(...children) // (aftereend)

// parent.replaceWith(child, nextElem)
// parent.insertBefore(child, nextElem)

// Remove Elements
const slWrapper = document.querySelector('.sl-wrapper')
const slTitle = document.querySelector('.title-link')

console.log(slTitle)
// parentElem.removeChild(child)
// slWrapper.removeChild(slTitle)

// elem.remove()
slTitle.remove()

// CLONE NODE
const footerLogoLink = headerLogoLink.cloneNode(true)
// console.log(footerLogoLink)
// footerLogoLink.style.color = 'white'
footerLogoLink.classList.replace('logo', 'home-page')
// elem.cloneNode(true) => with children
// elem.cloneNode(false) => only this element/without children
const footerLogoParent = document.getElementById('footer-logoParent')
// console.log(footerLogoParent)
footerLogoParent.prepend(footerLogoLink)

// as string
// const title = `<h1 class=""main-title">General Title</h1>`
const className = 'address-text'
const footerAddress = `<address class=${className}>
<span class="text">г. Киев, пр-т Леси Украинки, 26</span>
<a href="mailto:info@example.com" class="link">info@example.com</a>
<a href="tel:+380991111111" class="link">+38 099 111 11 11</a>
</address>`
// console.log(footerAddress)
// Add elements to HTML
// parent.innerHTML = child
footerLogoParent.insertAdjacentHTML('beforeend', footerAddress)
// parent.insertAdjacentHTML("beforebegin", child)

// parent.insertAdjacentHTML("afterbegin", child)

// parent.insertAdjacentHTML("beforeend", child)

// parent.insertAdjacentHTML("aftereend", child)






// CALLBACK is
// (event) => {}
// console.log(event)
// console.log(event.target)
// console.log(event.currentTarget)

// event.preventDefault() for "submit" by form & "click" by link (a)

// event.key (`) & event.code (Backquote)
// event.key (ё) & event.code (Backquote)

// event.key (Tab) & event.code (Tab)
// event.key (Escape) & event.code (Escape)
// event.key (Shift) & event.code (ShiftLeft)

// event.key (G) & event.code (KeyG)
// event.key (п) & event.code (KeyG)

// document.querySelector('body').addEventListener('keydown', (e) => {
//   console.log(e.key, e.code)
// })

// FOCUS for click by mouse or Tab

// например нам нужно отрисовать баннер с обратным отсчетом до конца действия акции
// обратный отсчет должен запуститься с полной загрузкой html
// document.addEventListener('DOMContentLoaded', callback)

// событие срабатывает при полнй загрузке всех скриптов и стилей
// используется редко
// document.addEventListener('load', callback)

//
// document.addEventListener('unload', callback)
// document.addEventListener('beforeunload', callback)

// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault()
//   // Chrome требует установки возвратного значения.
//   event.returnValue = ''
// })

// FOCUS ===================

// нужно зачищать слушатель событий,чтоб он не занимал память,
// необходимо функцию вынести в отдельную функцию и передавать ее ссылкой

// function handleCallback(e) {
//   console.log(e)
//   e.target.style.background = 'red'
// }
// input.addEventListener('focus', handleCallback)
// input.removeEventListener('focus', handleCallback)

// input.addEventListener('blur', (e) => {
//   e.target.style.background = 'green'
// })