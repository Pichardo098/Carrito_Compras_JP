function cart (db, printProducts){
    let cart = []
    //Elementos del DOM
    const productsDOM = document.querySelector("#cards")
    const box_cant_item = document.querySelector(".cant_articulo")
    const cartDOM =  document.querySelector(".cart__body")
    const countDOM = document.querySelector(".cart__count--item")
    const totalDOM = document.querySelector(".cart__total--item")
    const checkoutDOM = document.querySelector(".btn--buy")
    
    //Funcions
    function printCart(){
        let htmlCart = ' '
        if(cart.length===0  ){
            htmlCart = `
            <div class="cart__empty">
                <i class="fas fa-shopping-cart"></i>
                <p class="cart__empty--text">
                    No hay productos en el carrito.
                </p>
            </div>
            `
            box_cant_item.classList.remove('show--cant_articulo')
        }else{
            for(const item of cart){
                const product = db.find(p => p.id === item.id)
                htmlCart += `
                <article class="article">
                    <div class="article__image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="article__content">
                        <h3 class="article__title">
                            ${product.name}
                        </h3>
                        <span class="article__price">$${product.price}</span>
                        <div class="article__quantity">
                            <button type="button" class="article__quantity-btn article__minus" data-id="${item.id}">
                                <i class="fas fa-minus" aria-hidden="true"></i>
                            </button>
                            <span class="article__quantity--text">${item.qty}</span>
                            <button type="button" class="article__quantity-btn article__plus" data-id="${item.id}">
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <button type="button" class="article__btn remove-from-cart" data-id="${item.id}">
                            <i class="fas fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>

                </article>
                `
            }
            box_cant_item.classList.add('show--cant_articulo')
        }
        cartDOM.innerHTML = htmlCart
        box_cant_item.innerHTML = showItemsCount()
        countDOM.innerHTML = showItemsCount()
        totalDOM.innerHTML = showTotal()
    }
    function addToCart(id, qty = 1){
        const itemFinded = cart.find(i => i.id === id)

        if(itemFinded){
            itemFinded.qty += qty
        }else{
            cart.push({id, qty})
        }
        printCart()
    }
    function removeFromCart (id, qty = 1){
        const itemFinded = cart.find(i => i.id === id)

        const result = itemFinded.qty - qty
        if(result>0){
            itemFinded.qty -= qty
        }else(
            cart = cart.filter(i => i.id !== id)
        )
        printCart()
    }
    function deleteFromCart (id){
        cart = cart.filter(i => i.id !== id)
        printCart()
    }
    function showItemsCount () {
        let suma = 0 
        for(const item of cart){
            suma += item.qty
        }
        return suma
    }
    function showTotal(){
        let total = 0 
        for(const item of cart){
            const productFinded = db.find(p=> p.id === item.id)
            total += item.qty * productFinded.price
        }
        return total
    }
    function checkout(){      
        if(cart.length === 0){
            window.alert("Favor de agregar articulos al carrito")
        }else if(cart.length > 0){
            for(const item of cart){
                for(let i = 0; i < db.length; i++){
                    if(db[i].id === item.id){
                        if(db[i].quantity === 0){
                            window.alert(`Lo siento, en este momento no tenemos stock del srticulo con ID ${item.id}`)
                            cart =[]
                            printCart()
                        }else if(db[i].quantity < item.qty  ){
                            window.alert(`No puedes comprar mas de ${db[i].quantity} del articulo con ID ${item.id}`)
                        }else if(db[i].quantity >= item.qty ){
                            db[i].quantity -= item.qty
                            let total = showTotal()
                            cart =[]
                            printProducts()
                            printCart()
                        }
                        
                        
                    }
                  
                }
            }
        }
        window.alert("Gracias por su compra")
    }


    printCart()


    //Eventos 
    productsDOM.addEventListener('click', function(e){
        if(e.target.closest('.add_carrito')){
            const id = parseInt(e.target.closest('.add_carrito').dataset.id)
            addToCart(id)
        }
    })

    cartDOM.addEventListener('click' , function (e){
        if(e.target.closest('.article__minus')){
            const id = parseInt(e.target.closest('.article__minus').dataset.id)
            removeFromCart(id)
        }
        if(e.target.closest('.article__plus')){
            const id = parseInt(e.target.closest('.article__plus').dataset.id)
            addToCart(id)
        }
        if(e.target.closest('.remove-from-cart')){
            const id = parseInt(e.target.closest('.remove-from-cart').dataset.id)
            deleteFromCart(id)
        }
    })

    checkoutDOM.addEventListener('click', ()=>{
        checkout()
    })

}

export default cart