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



