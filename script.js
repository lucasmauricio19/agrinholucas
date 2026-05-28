const topoBtn = document.getElementById('topoBtn');

window.addEventListener('scroll', () => {

  if(window.scrollY > 300) {
    topoBtn.style.display = 'block';
  } else {
    topoBtn.style.display = 'none';
  }

});

topoBtn.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0px)';
    }

  });

}, {
  threshold: 0.2
});

sections.forEach(section => {

  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 1s ease';

  observer.observe(section);

});