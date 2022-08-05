const elemsDec = document.querySelectorAll('.product__quantity-control_dec');
const elemsInc = document.querySelectorAll('.product__quantity-control_inc');
const elemsAdd = document.querySelectorAll('.product__add');

elemsInc.forEach((inc) => {
    inc.addEventListener('click', () => {
        let incCount = parseInt(inc.previousElementSibling.textContent);
        let total = incCount + 1; 
        inc.previousElementSibling.innerText = `${ total }`;
    })
})

elemsDec.forEach((dec) => {
    dec.addEventListener('click', () => {
        let decCount = parseInt(dec.nextElementSibling.textContent);
        if (decCount > 1) {
            dec.nextElementSibling.innerText = decCount - 1;
        };
    })
})

elemsAdd.forEach((add) => {
    add.addEventListener('click', () => {
        
        const idCart = add.closest('.product').dataset.id;
        const srcCart = add.closest('.product').querySelector('img').currentSrc;
        const quantity = add.closest('.product').querySelector('.product__quantity-value').textContent;
        
        const cartProducts = document.querySelector('.cart__products');
        // Проверка на наличие товара в корзине.
         
        const products = [...cartProducts.querySelectorAll('.cart__product')];

        const productDiv = products.find(product =>
            product.dataset.id === idCart);

        if (!!!productDiv) {
            div = document.createElement('div');
            div.setAttribute("class", "cart__product");
            div.dataset.id = idCart;
            
            cartProducts.appendChild(div);
            div.innerHTML = `
            <img class="cart__product-image" src=${srcCart}>
            <div class="cart__product-count">${quantity}</div>`
        } else {
            productDiv.lastChild.textContent = (parseInt(productDiv.textContent) + parseInt(quantity));
        };
    });
})