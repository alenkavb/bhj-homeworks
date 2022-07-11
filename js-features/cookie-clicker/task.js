const image = document.getElementById('cookie');
let switchSize = 0;
function changeSize() {
  if (switchSize % 2 === 0) {
    image.width = 250;
  } else {
    image.width = 200;
  }
  switchSize++;

  const output = document.getElementById('clicker__counter');
  output.textContent++;
};

image.onclick = changeSize;