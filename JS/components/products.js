function products (products){
    const bd = [...products]

    function printProducts(){
        const productsDOM = document.getElementById("cards")
        let htmlCard = ' '

        for ( let product of bd){
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
                <div class="sku">
                    SKU: ${product.id}
                </div>
            </article>
            `
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