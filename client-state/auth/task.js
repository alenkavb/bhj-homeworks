//localStorage.clear();
const span = document.getElementById('user_id');
const control = document.querySelectorAll('.control');

if (localStorage.length !== 0) {
  console.dir(localStorage);
  span.textContent = localStorage.id;
  showWelcom();
}

const form = document.getElementById('signin__form');
form.addEventListener('submit', (e) => {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest()
 
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
 
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const data = JSON.parse(xhr.responseText);
      //console.dir(typeof data.succes);
      if (data.success === true) {
        localStorage.setItem("id", `${data.user_id}`);
        console.dir(localStorage);
        span.textContent = `${data.user_id}`;
        showWelcom();
      } else {
        alert("Неверный логин/пароль");
      }  
      control.forEach((elem) => {
        elem.value = '';
      });
    }
  });
  xhr.send(formData);
  e.preventDefault();
})

function showWelcom() {
  const welcom = document.getElementById('welcome');
  welcom.classList.add('welcome_active');
  const signin = document.getElementById('signin');
  signin.classList.remove('signin_active');
}