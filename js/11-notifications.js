/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const refs = {
  notification: document.querySelector(".js-alert"),
};
const { notification } = refs;
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

notification.addEventListener('click', onNotificationClick);
shosNotification();
function shosNotification(){
    notification.classList.add('is-visible');
    timeoutId=setTimeout(()=>{
        console.log('Закрываем алерт');
        hideNotification()
            },NOTIFICATION_DELAY)
}
function onNotificationClick(){
    hideNotification();
    clearInterval(timeoutId);
}
function  hideNotification(){
    notification.classList.remove('is-visible');
    
}