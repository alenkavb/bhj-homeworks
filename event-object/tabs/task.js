const arrTab = Array.from(document.querySelectorAll('.tab'));

const arrTabContent = Array.from(document.querySelectorAll('.tab__content'));

arrTab.forEach((tab) => {
  tab.addEventListener("click", function (event) {
    document.querySelector('.tab_active').classList.remove('tab_active');
    tab.classList.add('tab_active');
    const index = arrTab.indexOf(tab);

    document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    arrTabContent[index].classList.add('tab__content_active');
  })
})
