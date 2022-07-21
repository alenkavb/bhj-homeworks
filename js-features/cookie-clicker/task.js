const image = document.getElementById('cookie');
let switchSize = 0;
function changeSize() {
  image.width = switchSize % 2 === 0 ? 250 : 200;
  switchSize++;

  const output = document.getElementById('clicker__counter');
  output.textContent++;
};

image.onclick = changeSize;