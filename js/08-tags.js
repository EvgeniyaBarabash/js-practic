// 1 вариант - можно кликнуть одну кнопку

const tagsContainer = document.querySelector('.js-tags');
// tagsContainer.addEventListener('click',onClickTags);
// let selectedTag=null;
// function onClickTags(event){
//     if(event.target.nodeName !== 'BUTTON'){
//         return;
//     }
  
//    const activeBtn = document.querySelector('.tags__btn--active');

//    if(activeBtn){
//     activeBtn.classList.remove('tags__btn--active'); 
//    }
//    event.target.classList.add('tags__btn--active');
// //    console.log(event.target);
//    selectedTag = event.target.dataset.value;
//    console.log(selectedTag);
// };


// 2 вариант - можно кликнуть много кнопок

const selectedTags = new Set();
tagsContainer.addEventListener('click', onTagsContainerClick);
function onTagsContainerClick(evt){
    if(evt.target.nodeName !=='BUTTON'){
        return;
    };
    const btn=evt.target;
    const tag = btn.dataset.value;
    const isActiveBtn=btn.classList.contains('tags__btn--active');
    if(isActiveBtn){
        selectedTags.delete(tag)
    }else{
        selectedTags.add(tag)
    }
    btn.classList.toggle('tags__btn--active');
    console.log(selectedTags);
};
