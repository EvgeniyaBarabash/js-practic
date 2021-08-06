const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};
// Открыть и закрыть модалку по клике на кнопку
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
function onOpenModal(){
    window.addEventListener('keydown',onEscPress);
    document.body.classList.add('show-modal');
};
function onCloseModal(){
    window.removeEventListener('keydown',onEscPress);
    document.body.classList.remove('show-modal');

};
// Закрыть модалку по клику в бекдроп
refs.backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(event){
    console.log(event.currentTarget);
    console.log(event.target);
    if(event.target===event.currentTarget){
        console.log('Клик именно по бекдропу');
        onCloseModal();
    }
};
// Закрыть мoдалку по клику на esc
// сначала повесим слушатель события нажатия на клавиатуру на window(  window.removeEventListener('keydown',onEscPress);
function onEscPress(event){
    // console.log(event);
    if(event.code==='Escape'){
        onCloseModal();
    }
    
};