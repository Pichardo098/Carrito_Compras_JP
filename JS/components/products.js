function products (products){
    const bd = [...products]

    function printProducts(){
        const productsDOM = document.getElementById("cards")
        let htmlCard = ' '

        for ( let product of bd){
            if(product.quantity === 0){
                htmlCard += `
                <article class="card" id="${product.id}">
                    <div id="hidden_card">Producto Agotado</div>
                    <div class="img_card">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <button class="add_carrito" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                    <div class="contenido_cantidad_precio">
                        <span class="precio">$${product.price}</span>
                        <span class="existencia">
                            <span> Disponibilidad:</span> 
                            <span data-id="${product.id}"> ${product.quantity}</span>
                        </span>
                    </div>
                    <p class="product_name">
                        ${product.name}
                    </p>
                    <div class="contenido_cantidad_precio">
                        <div class="sku">
                            SKU: ${product.id}
                        </div>
                        <button class="more_info" data-id="${product.id}" >
                            <i class="fas fa-info-circle"></i>
                        </button>
                    </div>
                    
                </article>
                ` 
            }else{
                htmlCard += `
            <article class="card" id="${product.id}">
                <div class="img_card">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <button class="add_carrito" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i>
                </button>
                <div class="contenido_cantidad_precio">
                    <span class="precio">$${product.price}</span>
                    <span class="existencia">
                        <span> Disponibilidad:</span> 
                        <span data-id="${product.id}"> ${product.quantity}</span>
                    </span>
                </div>
                <p class="product_name">
                    ${product.name}
                </p>
                <div class="contenido_cantidad_precio">
                        <div class="sku">
                            SKU: ${product.id}
                        </div>
                        <button class="more_info" data-id="${product.id}" >
                            <i class="fas fa-info-circle"></i>
                        </button>
                    </div>
            </article>
            `
            }
        }
        productsDOM.innerHTML = htmlCard
    }
    printProducts()
    return{
        bd,
        printProducts
    }
}

export default products