const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = ()=>{
     modal.style.display = 'none'
    document.body.style.overflow = ''
}
modal.onclick = (e)=> (e.target === modal) && closeModal()

closeBtn.onclick = ()=> closeModal()
let scrollOpen = false
const scroll = ()=> {
    if(!scrollOpen && (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        openModal()
        window.removeEventListener('scroll',scroll)
        scrollOpen = true
    }
}

window.addEventListener('scroll', scroll)