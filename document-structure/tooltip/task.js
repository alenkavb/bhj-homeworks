const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', function(event) {
  event.preventDefault();
  const elem = event.target.closest('.has-tooltip');
  
  if (elem) {
    const position = elem.getBoundingClientRect();
    const div = document.createElement('div');
  
    div.className = 'tooltip';
    elem.after(div);

    elem.nextSibling.setAttribute('style', `left: ${position.left}px; top: ${position.top + 20}px`)
    elem.nextSibling.innerHTML = elem.title;
    if (document.querySelector('.tooltip_active')) {
      (document.querySelector('.tooltip_active')).classList.remove('tooltip_active') 
    }
    elem.nextSibling.classList.add('tooltip_active');
  } else {
    (document.querySelector('.tooltip_active')).classList.remove('tooltip_active');
  };
})

