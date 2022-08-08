const divAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
    let data = JSON.parse(xhr.responseText);
    
    const divTitle = document.getElementById('poll__title');
    divTitle.innerText = data.data.title;
    
    data.data.answers.forEach(element => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.innerText = element;

      divAnswers.appendChild(button);
    }); 
  }
}

divAnswers.addEventListener('click', (event) => {
  if (event.target.closest('.poll__answer')) {
    alert('Спасибо, ваш голос засчитан!');
  }
})


