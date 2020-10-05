document
  .querySelector('.navigation__button')
  .addEventListener('click', function() {
    let classes = document.querySelector('.navigation__list').classList;
    classes.contains('hidden')
      ? classes.remove('hidden')
      : classes.add('hidden');
  });

document
  .getElementById('copyright')
  .appendChild(document.createTextNode(new Date().getFullYear()));
