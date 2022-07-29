const vidget = document.querySelector('.chat-widget');
vidget.addEventListener("click", () => {
    vidget.classList.add('chat-widget_active');
})

const d = new Date;
let time = [d.getHours(), d.getMinutes()].map(function (x) {
  return x < 10 ? "0" + x : x
}).join(":");

const block = document.querySelector('.chat-widget__messages-container');

const getRandomMessage = () => {
  const robotMessages = [
    "Кто вы такой?",
    "Что вам тут надо?",
    "Мы работаем с часу до четырех",
    "Вообще-то у нас все в отпуске",
    "Не пишите нам больше",
    "Мне некогда с вами тут больтать!",
    "Пишите разборчивее!",
    "Тебе больше нечем заняться?",
  ];

  const idx = Math.floor(Math.random() * robotMessages.length);

  return robotMessages[idx];
}

function setElementScrollBy() {
	block.scrollBy({
		top: block.offsetHeight,
		left: 0,
		behavior: "smooth"
	})
}

const input = document.getElementById('chat-widget__input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (this.value !== "") {
      const messages = document.querySelector( '.chat-widget__messages' );

      messages.innerHTML += `
      <div class = "message message_client">
        <div class = "message__time">${time}</div>
        <div class = "message__text">${input.value}</div>
      </div>
      `;

      input.value = "";

      messages.innerHTML += `
      <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${getRandomMessage()}</div>
      </div>
      `;

      setElementScrollBy();
    }
  }
})
