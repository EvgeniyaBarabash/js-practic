const list = document.querySelector('#list');
const items=[...list.children]
console.log(items);
const options={
    root: list,
    threshold: 0.5,
};
const observer = new IntersectionObserver(callback, options);
function callback(entries, observer){
    console.log(entries);
     entries.forEach((entry)=>{
        entry.isIntersecting ?  entry.target.classList.add('observe') :  entry.target.classList.remove('observe');}
     )
   
};
items.forEach((li)=>{observer.observe(li)});


// ДОБАВЛЯЕМ ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
const modal =document.querySelector('.backDrop')
list.addEventListener('click', (e)=>{console.log(e.target)
    e.preventDefault()
if(e.target.nodeName==='A'){
modal.classList.remove('isHidden');
}
}
);

const closeBtnModal = document.querySelector('#closeModal');
closeBtnModal.addEventListener('click', onCloseModal);
function onCloseModal(event){
    modal.classList.add('isHidden');
};

window.addEventListener('keydown', onClickEsc);
function onClickEsc(event){
if(event.code==='Escape'){
    onCloseModal();
}
};
if (!modal.classList.contains('isHidden')) {
    modal.removeEventListener('click', onCloseModal)
    window.removeEventListener('keydown', onClickEsc)
  };