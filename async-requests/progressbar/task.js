
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
    uploadResult = "прерывание";
  };
  
  xhr.upload.onerror = function(event) {
    console.log("--- upload failed", event);
    uploadResult = "ошибка";
  };
  
  xhr.upload.onloadend = function(event) {
    console.log("--- upload onloadend", event);
    progress.classList.remove("progress-active");
    descr.classList.add("descr-active");
    descr.textContent = "Выгрузка завершена. Результат - " + uploadResult;
};


  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
})
