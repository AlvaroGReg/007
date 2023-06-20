const nav = document.getElementById('navcontainer')

const openMenu = () => {
    if (nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }
}