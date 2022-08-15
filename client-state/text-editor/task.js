const textInTextarea = localStorage.getItem('text');
const textArea = document.getElementById('editor');
const btn = document.getElementById('button');
 
if (textInTextarea) {
  textArea.value = textInTextarea;
}
 
textArea.oninput = () => {
  localStorage.setItem('text', `${textArea.value.trim()}`);
}
 
btn.addEventListener('click', () => {
  textArea.value = "";
  localStorage.removeItem('text');
})
 