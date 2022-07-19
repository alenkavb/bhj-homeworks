const buts = document.querySelectorAll('.dropdown');

buts.forEach((but) => {
  but.onclick = function (event) {
    but.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
  }

  const items = but.querySelectorAll('.dropdown__item');
  items.forEach((item) => {
    item.addEventListener('click', function (event) {
      const value = item.querySelector('.dropdown__link').textContent;
      const itemWithValue = but.querySelector('.dropdown__value');
      itemWithValue.textContent = value;
      event.preventDefault();
    })
  });
})


