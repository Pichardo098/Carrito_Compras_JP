const cards = document.getElementsByClassName("info_footer")
const mostrar = document.getElementById("mostrar_1");

function visible_card_footer () {
    mostrar.addEventListener("click", (event)=> {
        if(cards[0].children[0].id === event.target.dataset.id ){
            cards[0].children[2].style.display = "block"
            cards[0].children[1].style.display = "block"
            cards[0].children[0].style.display = "none"
        } 
    })
}

export default visible_card_footer