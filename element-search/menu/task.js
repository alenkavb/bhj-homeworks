const listElemettsMenuLink = Array.from(document.querySelectorAll('.menu__link'));

for (let i = 0; i < listElemettsMenuLink.length; i++) {
  listElemettsMenuLink[i].onclick = showClik;
}

//console.log(listElemettsMenuLink);

function showClik() {
  console.log("Клк!");
}