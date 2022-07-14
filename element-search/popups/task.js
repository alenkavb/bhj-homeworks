const modalWindow = document.getElementById('modal_main');
modalWindow.classList.add('modal_active');

const showSuccess = document.querySelector('.show-success');
showSuccess.onclick = function () {
  const changeWindow = document.getElementById('modal_success');
  changeWindow.classList.add('modal_active');
}

const modalClose = Array.from(document.querySelectorAll('.modal__close'));
console.log(modalClose);
for (let i = 0; i < modalClose.length; i++) {
  console.log(modalClose[i]);

  if (modalClose[i].tagName === 'DIV') {
    modalClose[i].onclick = function () {
      const arrWindowsOpen = Array.from(document.querySelectorAll('.modal_active'));
      arrWindowsOpen.forEach(element => element.classList.remove('modal_active'));
    }
  }
}

