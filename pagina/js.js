

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


/* PARA SELECIONAR NA HEADER*/

const botaoprojetos= document.getElementById("projetos")
const trocapagina = document.getElementById("paginahome")
const botaohome = document.getElementById("iconhome")
const voltarhome = trocapagina.innerHTML
const botaoprojetosgrande = document.querySelector(".botãoprojetos")


    


botaohome.addEventListener("click", function voltarHome(){
    trocapagina.innerHTML = voltarhome
})

botaoprojetos.addEventListener("click", function(){
    fetch("./projetos.html")

.then(resposta => resposta.text())
.then(html => {
    trocapagina.innerHTML = html
})
})

botaohome.addEventListener("click", function voltarHome(){
    trocapagina.innerHTML = voltarhome
})

trocapagina.addEventListener("click", function(evento) {
    if (evento.target.closest(".botãoprojetos")) {
        selecionar(botaoprojetos);
        fetch("./projetos.html")
            .then(resposta => resposta.text())
            .then(html => {
                trocapagina.innerHTML = html;
            });
    }
});


/* Selecionado*/


/* Selecionado */

/* Selecionado */

/* SELEÇÃO DA HEADER */

const botaosobre = document.getElementById("sobre");
const botaocontatos = document.getElementById("contato");

const botoes = [
    botaohome,
    botaoprojetos,
    botaosobre,
    botaocontatos,
    botaoprojetosgrande
];

function selecionar(botao) {

    botoes.forEach(item => {
        item.classList.remove("selecionado");
    });

    botao.classList.add("selecionado");

    console.log("Selecionado:", botao.id);
}

// Home começa selecionada
selecionar(botaohome);

// Seleção ao clicar nos ícones
botoes.forEach(item => {

    item.addEventListener("click", function() {
        selecionar(item);
    });

});

