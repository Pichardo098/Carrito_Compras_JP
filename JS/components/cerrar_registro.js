const user_ventana = document.getElementById("registro_usuario")
const cerrar_registro = document.getElementById("cerrar_usuario")

function cerrar_regis () {
    cerrar_registro.addEventListener("click" ,() => {
        user_ventana.style.display = "none"
    })
}

export default cerrar_regis