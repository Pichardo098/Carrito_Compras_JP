//Manipulación Usuario Ventana

const user_ventana = document.getElementById("registro_usuario")

console.log(user_ventana.style )
const ocultar_registro = () => {
    user_ventana.style.display = "none"
}

const mostrar_registro = () => {
    user_ventana.style.display = "flex"
}

const inicio_crear_cuenta = () => {
    alert ("Lo sentimos, en este momento no es posible realizar la tarea.")
}

//Manipulación de Card Footer
const cards = document.getElementsByClassName("info_footer")


const mostrar = (num_btn) => {
    if(cards[0].children[0] === num_btn ){
        cards[0].children[2].style.display = "block"
        cards[0].children[1].style.display = "block"
        cards[0].children[0].style.display = "none"
    } else {
        cards[0].children[2].style.display = "none"
        cards[0].children[1].style.display = "none"
        cards[0].children[0].style.display = "block"
    }
    
}

const ocultar = (num_btn) => {
        if(cards[0].children[1] === num_btn ){
            cards[0].children[2].style.display = "none"
            cards[0].children[0].style.display = "block"
            cards[0].children[1].style.display = "none"
        }
    
}