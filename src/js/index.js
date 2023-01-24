console.log(document);
console.log(document.querySelector(".botao-trailer"));
const botaoTariler = document.querySelector(".botao-trailer");
const modal=document.querySelector(".modal");
const botaoFecharModal=document.querySelector(".fechar");
console.log(video.src);
const linkVideo=video.src;
const trailer=document.getElementById("video");

function mudarModal() {
    modal.classList.toggle("aberto");
}
botaoTariler.addEventListener("click", ()=>{
    mudarModal();
    trailer.setAttribute("src", linkVideo)
})
botaoFecharModal.addEventListener("click", ()=>{
    mudarModal();
    trailer.setAttribute("src","");
})

