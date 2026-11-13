document.querySelectorAll("img").forEach((imagem) => {
    imagem.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
});