let mouseInner = document.querySelector(".mouseInner")
let mouseOuter = document.querySelector(".mouseOuter")


window.addEventListener("mousemove",(e)=>{
    let posX = e.clientX
    let posY = e.clientY

    mouseInner.style.left = posX +"px" 
    mouseInner.style.top = posY + "px"

    mouseOuter.style.left = posX + "px"
    mouseOuter.style.top = posY + "px"
})

window.addEventListener("click", ()=>{
   mouseInner.classList.toggle("mouse2")
})
