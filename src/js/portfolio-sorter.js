document.addEventListener('DOMContentLoaded', function () {
  const filterItems = document.querySelectorAll('.filter-item');
  const filterButtons = document.querySelectorAll('.nav-buttons');
  const text = document.querySelector('.categories_text');

  function showItems(category) {
    if (!text || !category) {
      return;
    }
    text.textContent = category;
    filterItems.forEach(item => {
      if (category === 'Всі відео' || item.dataset.category === category) {
        item.classList.add('show');
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
        item.classList.remove('show');
      }
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.dataset.filter;
      showItems(category);
    });
  });

  showItems('Всі відео');
});
