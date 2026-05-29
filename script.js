const imagens = document.querySelectorAll("img");

imagens.forEach((imagem) => {
  imagem.addEventListener("dragstart", (evento) => {
    evento.preventDefault();
  });
});

const topoBtn = document.getElementById("topoBtn");

if (topoBtn) {
  topoBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    document.body.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}