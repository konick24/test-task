const WIDTH_MEDIUM = 768;

const nav = document.querySelector('.nav');
const navButton = nav.querySelector('.nav__button');
const navList = nav.querySelector('.nav__list');
const page = document.querySelector(".page");

navButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  navButton.classList.toggle('nav__button--opened');
  navButton.classList.toggle('nav__button--closed');
  navList.classList.toggle('nav__list--opened');
});

const onWindowScroll = () => {
  if (window.screen.width >= WIDTH_MEDIUM) {
    document.querySelector('.page-header').classList.toggle('page-header--scrolled', window.scrollY > 88);
  }
}

window.addEventListener("scroll", onWindowScroll);
