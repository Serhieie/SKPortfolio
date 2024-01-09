function applyStyles() {
  const windowHeight = window.innerHeight;
  const smallScreenHeight = 460;
  const item15 = document.querySelector('.item-15');
  const elementsToModify = [
    document.querySelector('.item-16-18'),
    document.querySelector('.item-3-11'),
    document.querySelector('.item-15'),
    document.querySelector('.header'),
    document.querySelector('.hero_title_wrapper'),
    document.querySelector('.agitation_text'),
    document.querySelector('.hero__section'),
    document.querySelector('.watch_more'),
    document.querySelector('.grid-container'),
  ];

  elementsToModify.forEach(element => {
    if (windowHeight <= smallScreenHeight) {
      element.classList.add('responsive-styles-for-large');
    } else {
      element.classList.remove('responsive-styles-for-large');
    }
  });

  if (windowHeight > smallScreenHeight) {
    item15.setAttribute('data-aos', 'fade-up');
  } else {
    item15.removeAttribute('data-aos');
  }
}

function handleResize() {
  applyStyles();
}

window.addEventListener('resize', handleResize);
applyStyles();
