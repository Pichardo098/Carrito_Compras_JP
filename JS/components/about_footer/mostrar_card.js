function visible_card_footer () {

    const cards = document.getElementsByClassName("info_footer")
    const mostrar = document.getElementById("mostrar_1")

    function mostrar_carrito (event){
            if(cards[0].children[0].id === event.target.dataset.id ){
                cards[0].children[2].style.display = "block"
                cards[0].children[1].style.display = "block"
                cards[0].children[0].style.display = "none"
            } 
    }
    
    
    const ocultar = document.getElementById("ocultar_1")

    function ocultar_carrito(event){
        if(cards[0].children[1].id === event.target.dataset.id ){
            cards[0].children[2].style.display = "none"
            cards[0].children[0].style.display = "block"
            cards[0].children[1].style.display = "none"
        }
    }

    mostrar.addEventListener("click", (event)=>{
        mostrar_carrito(event)
    })

   ocultar.addEventListener("click", (event)=> {
    ocultar_carrito(event)
   })
} 




export default visible_card_footer