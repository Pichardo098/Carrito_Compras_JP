const cards = document.getElementsByClassName("info_footer")
const ocultar = document.getElementById("ocultar_1")

function ocultar_card_footer (){
    ocultar.addEventListener("click", (event)=> {
        if(cards[0].children[1].id === event.target.dataset.id ){
                cards[0].children[2].style.display = "none"
                cards[0].children[0].style.display = "block"
                cards[0].children[1].style.display = "none"
            }
    })
}

export default ocultar_card_footer