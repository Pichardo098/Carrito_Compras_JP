function theme (){
    const themeButton = document.getElementById("theme")
    const icon = themeButton.firstElementChild
    /*const ls = window.localStorage

    const theme = ls.getItem('theme')
    if(theme === 'dark'){
        document.body.classList.add("dark")
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')

    }else{
        document.body.classList.remove("dark")
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    }
    */
    themeButton.addEventListener('click', ()=>{
        document.body.classList.toggle("dark")
        if(document.body.classList.contains("dark")){
            icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
            ls.setItem('theme','dark')
        }else{
            icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
            ls.removeItem('theme')

        }
    })
    
}

export default theme