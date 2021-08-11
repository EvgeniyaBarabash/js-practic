const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
  ];
  
  /*
   * 1. Рендерим разметку элементов списка
   * 2. Слушаем изменение фильтра
   * 3. Фильтруем данные и рендерим новые элементы
   */

 const input = document.querySelector('#filter');
 const list = document.querySelector('.js-list');
 input.addEventListener('input', _.debounce(onFilterListItemsMurkup, 1000));
 const listItemsMurkup = createListItemMarkup(tech);
 list.innerHTML=listItemsMurkup;
 function createListItemMarkup(items){
     return items.map(item=>`<li>${item.label}</li>`).join('');
 };
 
 function onFilterListItemsMurkup(evt){
     const filter =evt.target.value.toLowerCase();
     const filterItems=tech.filter(t=>t.label.toLowerCase().includes(filter));
     const listItemsMurkup = createListItemMarkup(filterItems);
     list.innerHTML=listItemsMurkup;
 };

 