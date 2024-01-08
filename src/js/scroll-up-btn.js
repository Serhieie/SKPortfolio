const btnToUp = document.querySelector('.btn-up');
const headerLogo = document.querySelector('.name');
const header = document.querySelector('.header__container');
const body = document.body;
const screenWidth = window.innerWidth;

btnToUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.onscroll = () => {
  if (window.scrollY > 240 && screenWidth > 1439) {
    headerLogo.classList.remove('hidden');
  }
  if (window.scrollY < 240 && screenWidth > 1439) {
    headerLogo.classList.add('hidden');
  }
  if (body.classList.contains('modal-is-open')) {
    return btnToUp.classList.add('visually-hidden');
  } else if (window.scrollY > 600) {
    btnToUp.classList.remove('visually-hidden');
    btnToUp.classList.remove('btn-up-hidden');
  } else if (window.scrollY < 600) {
    btnToUp.classList.add('visually-hidden');
  }
};

export { btnToUp };
