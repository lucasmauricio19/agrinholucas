const imagens = document.querySelectorAll("img");

imagens.forEach((imagem) => {
  imagem.addEventListener("dragstart", (evento) => {
    evento.preventDefault();
  });
});

const topoBtn = document.getElementById("topoBtn");

if (topoBtn) {
  topoBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}