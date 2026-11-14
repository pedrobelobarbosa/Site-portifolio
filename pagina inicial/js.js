

/*PARA NÃO ARRASTAR IMAGENS*/


document.querySelectorAll("img").forEach((imagem) => {
    imagem.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
});


/* MODAL ABRIR/FECHAR */

        const abrir = document.getElementById("config")
        const modal = document.querySelector(".modal")
        const sair = document.getElementById("fechar")
        abrir.addEventListener("click", function(){
            modal.style.display = "flex"
            
        })

        sair.addEventListener("click", function(){
        modal.style.display="none"
    })