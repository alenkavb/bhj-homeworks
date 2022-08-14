
const form = document.getElementById('form');
const descr = document.getElementById('descr');
const loader = document.getElementById('loader');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let uploadResult = 'успешно'
  let uploading = false;
  const xhr = new XMLHttpRequest();
  formData = new FormData(form);

  loader.classList.add("loader-active");
  // тут засунуть в описание "Ожидание соединения с сервером..."
  descr.classList.add("descr-active");
  descr.textContent = "Ожидание соединения с сервером...";

  progress.value = 0;
    
  xhr.upload.onprogress = function(event) {
    let progressVal = event.loaded * 100 / event.total;

    if (!uploading && event.loaded > 0) {
      uploading = true;
      loader.classList.remove("loader-active");
      descr.classList.remove("descr-active");
      progress.classList.add("progress-active");
    }
  
    console.log(progressVal);
    progress.value = progressVal;
  };

  xhr.upload.onabort = function(event) {
    console.log("--- upload aborted", event);
    // обработчик отмены (прерывания) выгрузки
    // descr.classList.add("descr-active");
    // descr.textContent = "Загрузка прервана.";
    uploadResult = "прерывание";
  };
  
  xhr.upload.onerror = function(event) {
    console.log("--- upload failed", event);
    // обработчик ошибки при выгрузке
    // descr.classList.add("descr-active");
    // descr.textContent = "Произошла ошибка. Попрбуйте еще раз";
    uploadResult = "ошибка";
  };
  
  xhr.upload.onloadend = function(event) {
    console.log("--- upload onloadend", event);
    progress.classList.remove("progress-active");
    // тут засунуть в описание "Файл успешно выгружен."
    descr.classList.add("descr-active");
    descr.textContent = "Выгрузка завершена. Результат - " + uploadResult;
};


  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);


  // // const idTimer = setInterval(() => {
  // //   // if (!xhr.upload.onprogress) {
  // //   //   if (progress.value < 0.8) {
  // //   //     progress.value += 0.008;
  // //   //   }
  // //   // }
  // // }, 200);

  // if (xhr.upload) {
  //   xhr.upload.addEventListener('progress', (event) => {
  //     let progressVal = event.loaded * 100 / event.total;
  //     console.log(progressVal);
  //     progress.value = progressVal;
  //     // clearInterval(idTimer);
  //     // if (event.lengthComputable) {
  //     //   loadProcess(event.loaded, event.total);
  //     // }

  //   }, false);

  //   xhr.send(formData);
  // } else {
  //   console.log("xhr.upload is ", xhr.upload);
  // }
})
