// animação do texto
const myName = document.querySelector('.c-header__title--emphasis');

function typing(el) {
  const textArray = el.innerHTML.split('');
  el.innerHTML = "";

  textArray.forEach((letter, i) => {
    setTimeout(() => el.innerHTML += letter ,110 * i)
  });

  setInterval(() => typing(el), 3000)
}

typing(myName);

// download do cv
