const textInTextarea = localStorage.getItem('text');
const textArea = document.getElementById('editor');
const btn = document.getElementById('button');
 
if (textInTextarea) {
  textArea.value = textInTextarea;
}
 
window.addEventListener("unload", () => {
  localStorage.setItem('text', `${textArea.value}`);
})
 
btn.addEventListener('click', () => {
  textArea.value = "";
  localStorage.clear;
})
 