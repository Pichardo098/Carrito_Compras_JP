const btn_crear_cuenta = document.getElementsByClassName("botones_user")
function sesion_crear_cuenta () {

    for(let i = 0; i < btn_crear_cuenta.length; i++) {
        btn_crear_cuenta[i].addEventListener("click", ()=>(
            alert ("Lo sentimos, en este momento no es posible realizar la tarea.")
        ))
    }
}

export default sesion_crear_cuenta