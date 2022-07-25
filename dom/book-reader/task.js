const fontSizes = document.querySelectorAll('.font-size');
console.log(fontSizes);

fontSizes.forEach((fontSize) => {
    fontSize.addEventListener("click", function(event) {
        const fontSizeActiv = document.querySelector('.font-size_active');
    fontSizeActiv.classList.remove('font-size_active');

    this.classList.add('font-size_active');
    let data = this.dataset.size;
    
    const book = document.querySelector('.book');
    console.log(data);
    book.classList.remove('book_fs-big', 'book_fs-small');
    if (data !== undefined) {
        book.classList.add('book_fs-' + data);
        console.log(book);
    };
    event.preventDefault();
})
})

