
/* =====================================
   IMPEDIR ARRASTAR E CLICAR COM BOTÃO DIREITO NAS IMAGENS
===================================== */

document.addEventListener("contextmenu", function(event) {
    if (event.target.closest("img")) {
        event.preventDefault();
    }
});

document.addEventListener("dragstart", function(event) {
    if (event.target.closest("img")) {
        event.preventDefault();
    }
});


/* =====================================
   MODAL ABRIR / FECHAR
===================================== */

const abrir = document.getElementById("config");
const modal = document.querySelector(".modal");
const sair = document.getElementById("fechar");

abrir.addEventListener("click", function() {
    modal.style.display = "flex";
});

sair.addEventListener("click", function() {
    modal.style.display = "none";
});


/* =====================================
   SELEÇÃO DE TEMA CLARO / ESCURO
===================================== */

const botaoclaro = document.getElementById("botaoclaro");
const botaoescuro = document.getElementById("botaoescuro");

// Guardar o caminho original da foto
const fotoOriginal = document
    .getElementById("henrriqueimg")
    ?.getAttribute("src");

// Foto utilizada no tema escuro
const fotoEscura = "imagens/Retrato Sério com Camisa Preta.png";


// FUNÇÃO PARA TROCAR A FOTO
function trocarFoto(tema) {

    const foto = document.getElementById("henrriqueimg");

    if (!foto) return;

    if (tema === "claro") {
        if (fotoOriginal) {
            foto.src = fotoOriginal;
        }
    } else {
        foto.src = fotoEscura;
    }
}


// FUNÇÃO PARA SELECIONAR O TEMA
function selecionarTema(tema) {

    botaoclaro.classList.remove("ativo");
    botaoescuro.classList.remove("ativo");

    if (tema === "claro") {
        botaoclaro.classList.add("ativo");
        document.body.classList.add("tema-claro");
    } else {
        botaoescuro.classList.add("ativo");
        document.body.classList.remove("tema-claro");
    }

    // Salvar o tema escolhido
    localStorage.setItem("tema", tema);

    // Atualizar a foto
    trocarFoto(tema);
}


// EVENTOS DOS BOTÕES
botaoclaro.addEventListener("click", function() {
    selecionarTema("claro");
});

botaoescuro.addEventListener("click", function() {
    selecionarTema("escuro");
});


// RECUPERAR TEMA SALVO
const temaSalvo = localStorage.getItem("tema") === "claro"
    ? "claro"
    : "escuro";

selecionarTema(temaSalvo);


/* =====================================
   ELEMENTOS DA HEADER
===================================== */

const logo = document.getElementById("logo-header");

const botaohome = document.getElementById("iconhome");
const botaoprojetos = document.getElementById("projetos");
const botaosobre = document.getElementById("sobre");
const botaocontatos = document.getElementById("contato");

const trocapagina = document.getElementById("paginahome");

// Guardar o conteúdo original da Home
const voltarhome = trocapagina.innerHTML;


/* =====================================
   SELEÇÃO DOS ÍCONES DA HEADER
===================================== */

const botoes = [
    botaohome,
    botaoprojetos,
    botaosobre,
    botaocontatos
].filter(Boolean);


function selecionar(botao) {

    // Remover a seleção anterior
    botoes.forEach(function(item) {
        item.classList.remove("selecionado");
    });

    // Selecionar o botão clicado
    if (botao) {
        botao.classList.add("selecionado");
    }
}


// HOME COMEÇA SELECIONADA
selecionar(botaohome);


// SELECIONAR AO CLICAR
botoes.forEach(function(item) {

    item.addEventListener("click", function() {
        selecionar(item);
    });

});


/* =====================================
   NAVEGAÇÃO ENTRE PÁGINAS
===================================== */

// FUNÇÃO PARA VOLTAR À HOME
function voltarHome() {

    trocapagina.innerHTML = voltarhome;

    selecionar(botaohome);

    // Atualizar a foto de acordo com o tema atual
    const temaAtual = localStorage.getItem("tema");

    trocarFoto(temaAtual);
}


// FUNÇÃO PARA ABRIR PROJETOS
function abrirProjetos() {

    selecionar(botaoprojetos);

    fetch("./projetos.html")

        .then(function(resposta) {

            if (!resposta.ok) {
                throw new Error("Erro ao carregar projetos");
            }

            return resposta.text();

        })

        .then(function(html) {

            trocapagina.innerHTML = html;

        })

        .catch(function(erro) {

            console.error(erro);

        });
}


// BOTÃO HOME
botaohome.addEventListener("click", voltarHome);


// BOTÃO PROJETOS DA HEADER
botaoprojetos.addEventListener("click", abrirProjetos);


// BOTÃO GRANDE DE PROJETOS
// Funciona mesmo após alterações no innerHTML

trocapagina.addEventListener("click", function(evento) {

    const botaoGrande = evento.target.closest(".botãoprojetos");

    if (botaoGrande) {

        abrirProjetos();

    }

});
