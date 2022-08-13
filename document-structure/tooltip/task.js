const elems = document.querySelectorAll(".has-tooltip");
elems.forEach(elem => {
   const div = document.createElement("div");
   div.classList.add("tooltip");
   elem.after(div); 

   elem.onclick = () => {
      const position = elem.getBoundingClientRect();
      const prompt = elem.nextElementSibling;
      prompt.innerHTML = elem.title;
      prompt.setAttribute("style", `left: ${position.left}px; top: ${position.top + 20}px;`);
    
    
    if (prompt.classList.contains("tooltip_active")) {
      prompt.classList.remove("tooltip_active");
    } else if (document.querySelector(".tooltip_active")){
      document.querySelector(".tooltip_active").classList.remove("tooltip_active");
      prompt.classList.add("tooltip_active");
    } else {
      prompt.classList.add("tooltip_active");
    }
    return false;
   };
  });  
   
window.onscroll = function(e) {
  const prompt = document.querySelector('.tooltip_active');
  if (prompt) {
    const elem = prompt.previousElementSibling;
    const position = elem.getBoundingClientRect();
    prompt.setAttribute("style", `left: ${position.left}px; top: ${position.top + 20}px;`);
  };
}

