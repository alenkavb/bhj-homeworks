function showNextSlider() {
  const currentSlider = document.querySelector('.slider__item_active');
  currentSlider.classList.remove('slider__item_active');

  if (currentSlider.nextElementSibling) {
    const nextSlider = currentSlider.nextElementSibling;
    nextSlider.classList.add('slider__item_active');
  } else {
    nextSlider = document.querySelector('.slider__item')
    nextSlider.classList.add('slider__item_active');
  }
}

function showPrevSlider() {
  const currentSlider = document.querySelector('.slider__item_active');
  currentSlider.classList.remove('slider__item_active');

  if (currentSlider.previousElementSibling) {
    const prevSlider = currentSlider.previousElementSibling;
    prevSlider.classList.add('slider__item_active');
  } else {
    const arr = Array.from(document.querySelectorAll('.slider__item'));
    prevSlider = arr[arr.length - 1];
    prevSlider.classList.add('slider__item_active');
  }
}

const nextButton = document.querySelector('.slider__arrow_next');
nextButton.onclick = showNextSlider;


const prevButton = document.querySelector('.slider__arrow_prev');
prevButton.onclick = showPrevSlider;
