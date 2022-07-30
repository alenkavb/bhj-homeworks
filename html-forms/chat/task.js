//  Открываем окно чата 
const vidget = document.querySelector('.chat-widget');
vidget.addEventListener("click", () => {
    vidget.classList.add('chat-widget_active');
})

//  Получаем текущее время
const d = new Date;
let time = [d.getHours(), d.getMinutes()].map(function (x) {
    return x < 10 ? "0" + x : x
}).join(":");

//  Получаем окно сообщений
const block = document.querySelector('.chat-widget__messages-container');

//  Объявляем таймер
let timerId = null;

//  Функция получения случайного сообщения из списка
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

// Функция автоскролла
function setElementScrollBy() {
	block.scrollBy({
		top: block.offsetHeight,
		left: 0,
		behavior: "smooth"
	})
}

// Получаем окно ввода
const input = document.getElementById('chat-widget__input');

// Печать сообщения от робота
function robotMessage() {
    const messages = document.querySelector( '.chat-widget__messages' );
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${getRandomMessage()}</div>
        </div>`;
    setElementScrollBy();
};

// Печать пользовательского сообщения
function printUserMessage() {
    const messages = document.querySelector( '.chat-widget__messages' );
                
    messages.innerHTML += `
    <div class = "message message_client">
        <div class = "message__time">${time}</div>
        <div class = "message__text">${input.value}</div>
    </div>`;
    input.value = "";
}


// Сообщение от робота при простое
function delayRobotMessage() {
    if (timerId != null) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(robotMessage, 3000);
}

/*
 * Обработчик нажатий клавиш в строке ввода.
 *
 * При нажатии любой клавиши необходимо проверить наличие взведённого таймера отложенного
 * сообщения от робота и, ежели чего, взвети его на новый интервал.
 * 
 * В случае нажатия <Enter> необходимо вывести в окно чата непустое сообщение от пользователя.
 */
input.addEventListener('keydown', (e) => {
    delayRobotMessage();

    if (e.key === 'Enter') {  
        if (this.value !== "") {
            printUserMessage();
            robotMessage();
        }
    }
})

//  Обработка события фокус
input.addEventListener('focus', () => {
    delayRobotMessage();
})
