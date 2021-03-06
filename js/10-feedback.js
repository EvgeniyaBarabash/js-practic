const form = document.querySelector('.js-feedback-form');
const textarea = document.querySelector('.js-feedback-form textarea');
const label = document.querySelector('.js-feedback-form input');

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
form.addEventListener('submit',onFormSubmit);
// textarea.addEventListener('input', onTextareaInput);
const STORAGE_KEY = 'feadback-massage';
function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
// function onTextareaInput(e){
// console.log(e.currentTarget.value);
// localStorage.setItem(STORAGE_KEY, e.currentTarget.value);
// };
/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
// function populateTextarea(){
// const savedMassage = localStorage.getItem(STORAGE_KEY);
// if(savedMassage){
//     textarea.value=savedMassage;
// }
// };
// populateTextarea()

// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте
const formData = {};
 form.addEventListener('input', onFormInput);
function onFormInput(e){
    formData[e.target.name]=e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};
 function getDataFromInput(){
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(savedData);
    console.log(parseData);
    if(parseData){
        textarea.value=parseData.message;
        label.value=parseData.name;
    }
 };
 getDataFromInput();