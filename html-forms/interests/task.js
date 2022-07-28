const interests = document.querySelectorAll('.interest__check');
interests.forEach((interest) => {
    interest.checked = false;
    interest.addEventListener("click", checkAll);
})

function checkAll(e) {
    const parent = e.target.closest('.interest');
    const children = parent.querySelectorAll('.interest__check');

    children.forEach((child) => {
        child.checked = this.checked;
    })
}


