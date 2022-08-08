const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
    
    let data = JSON.parse(xhr.responseText);
    let currencies = data.response.Valute;

    for (let currency in currencies) {
      const divItem = document.createElement('div');
      divItem.classList.add('item');
      divItem.innerHTML = `
      <div class='item__code'>${currencies[currency].CharCode} </div>
      <div class='item__value'> ${currencies[currency].Value} </div>
      <div class='item__currency'> руб.</div>`

      items.appendChild(divItem);
    };
  };
})