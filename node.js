//Manipulación de Card Footer
let cards = document.getElementsByClassName("info_footer")


const mostrar = (num_btn) => {
    for(let i = 0; i <= cards.length ; i++){
        if(cards[i].children[0] === num_btn ){
            cards[i].children[2].style.display = "block"
            cards[i].children[1].style.display = "block"
            cards[i].children[0].style.display = "none"
        } else {
            cards[i].children[2].style.display = "none"
            cards[i].children[1].style.display = "none"
            cards[i].children[0].style.display = "block"
        }
    }
}

const ocultar = (num_btn) => {
    for(let i = 0; i <= cards.length ; i++){
        if(cards[i].children[1] === num_btn ){
            cards[i].children[2].style.display = "none"
            cards[i].children[0].style.display = "block"
            cards[i].children[1].style.display = "none"
        }
    }
}