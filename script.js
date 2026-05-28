const imagens = document.querySelectorAll("img");

imagens.forEach((imagem) => {
  imagem.addEventListener("dragstart", (evento) => {
    evento.preventDefault();
  });
});