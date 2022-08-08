let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
    let data = JSON.parse(xhr.responseText);
    console.dir(data);
    console.log(data.data.title);
   
    const divTitle = document.getElementById('poll__title');
    divTitle.textContent = data.data.title;

    const divAnswers = document.getElementById('poll__answers')
  }
}

