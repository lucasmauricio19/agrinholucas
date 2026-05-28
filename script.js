const topoBtn = document.getElementById("topoBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topoBtn.classList.add("mostrar");
  } else {
    topoBtn.classList.remove("mostrar");
  }
});

topoBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});