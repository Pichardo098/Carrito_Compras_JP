/*Función Loader
$('button').on('click', function(){
    let number = getRandomInt(1, 40);
    if (number < 10) {number = '0'+ number;}
    $(this).html('<div class="loader-' + number + '"></div> Loading...');
    console.log('Resize window to change size and color of the button');
  });
  
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  $(window).resize(function() {
    $('button').css('color', 'hsl(' + Math.floor((window.innerWidth / 360)*100)  + ', 70%, 70%)');
  });
  */

//Manipulación Usuario Ventana

const user_ventana = document.getElementById("registro_usuario")
const mostrar_registro = document.getElementById("mostrar_registro")
mostrar_registro.addEventListener("click", () => {
    if(user_ventana.style.display === "flex"){
        user_ventana.style.display = ""
        
    }else{
        user_ventana.style.display = "flex"
        cart[0].style.right = ""
    }
})
const cerrar_registro = document.getElementById("cerrar_usuario")
cerrar_registro.addEventListener("click" ,() => {
    user_ventana.style.display = "none"
})

const btn_crear_cuenta = document.getElementsByClassName("botones_user")
const sesion_crear_cuenta = () => {
    for(btn of btn_crear_cuenta) {
        btn.addEventListener("click", ()=>(
            alert ("Lo sentimos, en este momento no es posible realizar la tarea.")
        ))
    }
}

sesion_crear_cuenta()

//Manipulación de BTN Carrito
const cart_nav = document.getElementById("cart_nav")
const cart = document.getElementsByClassName("cart")
cart_nav.addEventListener("click", (event)=>{
    let value_cart = cart[0].style.right
    if(value_cart === ""){
        cart[0].style.right = 0
    }else{
        cart[0].style.right = ""
    }
})
const btn_close_cart = document.getElementsByClassName("btn__close")[0]
btn_close_cart.addEventListener("click", (event)=>{
    cart[0].style.right = ""
})



//Manipulación de Card Footer
const cards = document.getElementsByClassName("info_footer")
const mostrar = document.getElementById("mostrar_1");

mostrar.addEventListener("click", (event)=> {
    if(cards[0].children[0].id === event.target.dataset.id ){
        cards[0].children[2].style.display = "block"
        cards[0].children[1].style.display = "block"
        cards[0].children[0].style.display = "none"
    } 
})
const ocultar = document.getElementById("ocultar_1")
ocultar.addEventListener("click", (event)=> {
    if(cards[0].children[1].id === event.target.dataset.id ){
            cards[0].children[2].style.display = "none"
            cards[0].children[0].style.display = "block"
            cards[0].children[1].style.display = "none"
        }
})



