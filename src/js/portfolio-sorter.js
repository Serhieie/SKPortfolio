document.addEventListener('DOMContentLoaded', function () {
  const filterItems = document.querySelectorAll('.filter-item');
  const filterButtons = document.querySelectorAll('.nav-buttons');

  function showItems(category) {
    filterItems.forEach(item => {
      if (category === 'All' || item.dataset.category === category) {
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
      AOS.refresh();
    });
  });

  showItems('All');
});
