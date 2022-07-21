function showNextRotator() {
  const currentRotator = document.querySelector('.rotator__case_active');
  currentRotator.classList.remove('rotator__case_active');

  if (currentRotator.nextElementSibling) {
    const nextRotator = currentRotator.nextElementSibling;
    nextRotator.classList.add('rotator__case_active');
  } else {
    nextRotator = document.querySelector('.rotator__case')
    nextRotator.classList.add('rotator__case_active');
  }
}

let timerId = setInterval(showNextRotator, 1000);