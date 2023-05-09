const cart = document.getElementsByClassName("cart")
const btn_close_cart = document.getElementsByClassName("btn__close")[0]

function cerrar_cart (){
    btn_close_cart.addEventListener("click", (event)=>{
        cart[0].style.right = ""
    })
}

export default cerrar_cart
