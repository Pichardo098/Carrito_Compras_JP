function printModal(bd, printProducts){

    const productsDOM = document.querySelector("#cards")
    const modalBox = document.querySelector(".modals")

    function printCard(id){
        let htmlModal = ' '
        
        const itemFinded = bd.find(i => i.id === id)
        htmlModal = `
        <section class="modal">
            <div class="img_card">
                <img src="${itemFinded.image}" alt="${itemFinded.name}">
            </div>
            <p>
                ${itemFinded.description}
            </p>
            <p class="sku">
                SKU: ${itemFinded.id}
            </p>
            <button type="button" class="close__modal">
                Salir
            </button>
        </section>
        `
        console.log(htmlModal)
        modalBox.style.top = "50%"
       console.log( modalBox.innerHTML = htmlModal)
    }


    function closeModal(){

    }

    productsDOM.addEventListener('click', function(e){
        if(e.target.closest('.more_info')){
            const id = parseInt(e.target.closest('.more_info').dataset.id)
            console.log(id)
            printCard(id)
        }
    })

    modalBox.addEventListener('click', (e)=>{
        if(e.target.closest('.close__modal')){
            modalBox.style.top = "-50%"
        }
    } )
    
}

export default printModal



