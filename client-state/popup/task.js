console.log(document.cookie);
if (document.cookie === '') {
  const modalWindow = document.getElementById('subscribe-modal');
  modalWindow.classList.add('modal_active');
}
 
const modalClose = document.querySelector('.modal__close');
modalClose.addEventListener('click', () => {
  const windowsOpen = document.querySelector('.modal_active');
  windowsOpen.classList.remove('modal_active');
  document.cookie = 'isClose=true';
});
