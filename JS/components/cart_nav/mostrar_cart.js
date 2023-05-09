const cart_nav = document.getElementById("cart_nav")
const cart = document.getElementsByClassName("cart")

function mostrar_cart_nav (){
    cart_nav.addEventListener("click", (event)=>{
        let value_cart = cart[0].style.right
        if(value_cart === ""){
            cart[0].style.right = 0
        }else{
            cart[0].style.right = ""
        }
    })
}

export default mostrar_cart_nav