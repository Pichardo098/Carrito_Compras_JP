const user_ventana = document.getElementById("registro_usuario")
const mostrar_registro = document.getElementById("mostrar_registro")
const cart = document.getElementsByClassName("cart")


function mostrar_regis () {
    mostrar_registro.addEventListener("click", () => {
        if(user_ventana.style.display === "flex"){
            user_ventana.style.display = ""
            
        }else{
            user_ventana.style.display = "flex"
            cart[0].style.right = ""
        }
    })
}

export default mostrar_regis
