const nav = document.querySelector('.nav');
const navButton = nav.querySelector('.nav__button');
const navList = nav.querySelector('.nav__list');

navButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  navButton.classList.toggle('nav__button--opened');
  navButton.classList.toggle('nav__button--closed');
  navList.classList.toggle('nav__list--opened');
});
