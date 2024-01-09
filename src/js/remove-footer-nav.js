document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('gallery.html')) {
    const galleryElement = document.querySelector('.footer-navigation');
    galleryElement.classList.add('visually-hidden');
  }
});
