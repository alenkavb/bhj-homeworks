let countDead = 0;
let countLost = 0;
const outputDead = document.getElementById('dead');
const outputLost = document.getElementById('lost');


function getHole(index) {
  const element = document.getElementById(`hole${index}`);
  return element;
}

function zeroing() {
  outputLost.textContent = 0;
  outputDead.textContent = 0;
  countDead = 0;
  countLost = 0;
}

function clickHandler() {
  if (this.className.includes('hole_has-mole')) {
    countDead++;
    outputDead.textContent = countDead;

    if (countDead === 10) {
      alert("Победа!");
      zeroing();
    }

  } else {
    countLost++;
    outputLost.textContent = countLost;

    if (countLost === 5) {
      alert("Вы проиграли!");
      zeroing();
    }
  }
}

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = clickHandler;
}