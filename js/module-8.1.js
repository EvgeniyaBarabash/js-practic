
// Пример 1 - создание и добавление кнопок при клике на кнопку "Дабавить кнопку" 
const container = document.querySelector('.js-container');
container.addEventListener('click', onClickContainer);
function onClickContainer(event){
    if(event.target.nodeName !== 'BUTTON'){
        return;
    };
    console.log(event.target);
    console.log(event.currentTarget);
};

/*
 * Код добавления кнопок
 */

const addBtn = document.querySelector('.js-add-btn');
addBtn.addEventListener('click', onAddButton);
let countBtn = 6;
function onAddButton(){
const btn = document.createElement('button');
btn.type = 'button';
btn.textContent = `Кнопка ${countBtn}`;
container.appendChild(btn);
countBtn +=1;
};



// Пример 2
