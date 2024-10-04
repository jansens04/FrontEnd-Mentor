const btnShowAccordion = document.querySelectorAll('.accordion li img');
const txtAccordion = document.querySelectorAll('.accordion p');

btnShowAccordion.forEach((btn, i) => {
  btn.addEventListener('click', (ev) => {
    const target = ev.target;
    ev.preventDefault();

    // Menghapus Seluruh Class Active pada txtAccordion terlebih dahulu

    txtAccordion.forEach((txt, j) => {
      if (txt.classList.contains('active') && i !== j) {
        txt.classList.remove('active');
        btnShowAccordion[j].src = `./assets/images/icon-plus.svg`;
      }
    });

    if (!txtAccordion[i].classList.contains('active')) {
      target.src = `./assets/images/icon-minus.svg`;
      txtAccordion[i].classList.add('active');
    } else {
      target.src = `./assets/images/icon-plus.svg`;
      txtAccordion[i].classList.remove('active');
    }
  });
});
