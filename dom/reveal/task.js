const objReveals = document.querySelectorAll('.reveal');

    objReveals.forEach((reveal) => {
        setInterval(() => {
            
            if (isVisible(reveal)) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
       }, 500); 
    })

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }
    return true;
}