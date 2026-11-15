

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


/* PARA SELECIONAR*/

const botaoclaro = document.querySelector("#botaoclaro")
const botaoescuro = document.querySelector("#botaoescuro")

function selecionartema(){

    botaoclaro.classList.remove("ativo")
    botaoescuro.classList.remove("ativo")

    this.classList.add("ativo")

    if(this === botaoclaro){
        localStorage.setItem("tema", "claro")
    }else{
        localStorage.setItem("tema", "escuro")
    }
}

botaoclaro.addEventListener("click", selecionartema)
botaoescuro.addEventListener("click", selecionartema)

const temasalvo = localStorage.getItem("tema")

if(temasalvo === "claro"){
    botaoclaro.classList.add("ativo")
}else if(temasalvo === "escuro"){
    botaoescuro.classList.add("ativo")
}else{
    botaoclaro.classList.add("ativo")
}
