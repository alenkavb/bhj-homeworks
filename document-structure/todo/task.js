// Получаем окно ввода
const input = document.getElementById('task__input');

// Получаем кнопку ввода
const btnAdd = document.getElementById('tasks__add');

// Получаем поле списка задач
const list = document.getElementById('tasks__list');

// Добавление задачи в список
function addTaskToList() {
  let div = document.createElement('div');
  div.className = 'task';
  div.innerHTML += `<div class="task__title">${input.value}</div>`;

  let a = document.createElement('a');
  a.setAttribute("href", "#");
  a.className = "task__remove";
  a.innerHTML = '&times;';

  a.addEventListener('click', () => {
    a.closest('.task').remove();
  })

  list.appendChild(div);  
  div.appendChild(a);

  input.value = "";
}

// Обработчик нажатий клавиш в строке ввода.
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {  
    if (input.value.trim() !== "") {
      e.preventDefault();
      addTaskToList();
    };
  };
})

// Обработчик кнопки "Добавить"
btnAdd.addEventListener('click', (e) => {
  if (input.value.trim() !== "") {
    addTaskToList();
  };
  e.preventDefault();
})


