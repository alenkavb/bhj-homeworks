document.getElementById("file").onchange = function() {
  const fileDesc = document.querySelector(".input__wrapper-desc");
  const progress = document.getElementById('progress');

  progress.value = 0;

  let fileName = this.value.split("\\");
  fileName = fileName[fileName.length - 1];
  fileDesc.textContent = fileName;
};
