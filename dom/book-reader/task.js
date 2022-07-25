const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach((fontSize) => {
    fontSize.addEventListener("click", function(event) {
        const fontSizeActiv = document.querySelector('.font-size_active');
        fontSizeActiv.classList.remove('font-size_active');

        this.classList.add('font-size_active');
        let data = this.dataset.size;
    
        const book = document.querySelector('.book');
        book.classList.remove('book_fs-big', 'book_fs-small');
        if (data !== undefined) {
            book.classList.add('book_fs-' + data);
        };
        event.preventDefault();
    })
})

