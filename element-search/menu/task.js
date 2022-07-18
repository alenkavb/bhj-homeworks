const links = document.querySelectorAll('.menu__link');

links.forEach((link) => {
  link.onclick = function (event) {
    const activElenent = document.querySelector('.menu_active');
    if (activElenent) {
      activElenent.classList.remove('menu_active');
    }
    if (link.closest('.menu__item').querySelector('.menu_sub')) {
      link.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
      return false;
    }
  };
})