counter = function () {
  const timer = document.getElementById('timer');
  timer.textContent--;
};

let timerId = setInterval(counter, 1000);

setTimeout(() => { clearInterval(timerId); alert('Вы победили в конкурсе!'); }, 60000);
