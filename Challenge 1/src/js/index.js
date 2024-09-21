const hamburgerMenu = document.querySelector('.icon-hambuger-menu');
const closeMenu = document.querySelector('.icon-close-menu');
const navContent = document.querySelector('.nav-content');

hamburgerMenu.onclick = () => {
  navContent.classList.add('active');
};

closeMenu.onclick = () => {
  navContent.classList.remove('active');
};
