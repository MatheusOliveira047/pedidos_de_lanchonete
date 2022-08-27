// menu responsivo
//SELETORES
let menuResponsivo = document.querySelector(".header")
let menuHambuguer = document.querySelector(".menu")
let fecharMenuAncoras = document.querySelectorAll(".nav-list li a")

//ADICIONANDO OS EVENTOS DE CLICK 
menuHambuguer.addEventListener("click",menu)
fecharMenuAncoras.forEach((ancoras)=>{
    ancoras.addEventListener('click',menu)   
})

//DECLARANDO A FUNÇÃO
function menu(){
    menuHambuguer.classList.toggle("active")
    menuResponsivo.classList.toggle("active")    
}





