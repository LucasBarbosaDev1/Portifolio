// animação do texto
const myName = document.querySelector('.c-header__title--emphasis');
const text = "Lucas Barbosa"
let index = 0;

function typeWrite() {
  if (index < text.length) {
    myName.textContent += text[index];
    index++;
    setTimeout(typeWrite, 75)
  }
}

typeWrite();

setInterval(() => {
  if (index === text.length) {
    myName.textContent = "";
    index = 0;
    typeWrite();
  }
}, 3000)

// projetos
const projects = [
  {
    img: "src/assets/mac2.png",
    altText: "",
    type: "FREELANCE",
    title: "CARDÁPIO ONLINE",
    linkSite: "https://cardapio-wpp.netlify.app/",
    linkGithub: "https://cardapio-wpp.netlify.app/"
  },
  {
    img: "src/assets/mac.png",
    altText: "",
    type: "PESSOAL",
    title: "PORTIFÓLIO",
    linkSite: "https://lucas-barbosa.netlify.app/#",
    linkGithub: "https://lucas-barbosa.netlify.app/#"
  },{
    img: "src/assets/mac2.png",
    altText: "",
    type: "PESSOAL",
    title: "PORTIFÓLIO",
    linkSite: "https://lucas-barbosa.netlify.app/#",
    linkGithub: "https://lucas-barbosa.netlify.app/#"
  }
];

const listProjects = document.querySelector('.c-main__listProject');
const btnAll = document.querySelector('#all');
const btnFrelance = document.querySelector('#freelance');
const btnPessoal = document.querySelector('#pessoal');

btnAll.addEventListener('click', () => {
  listProjects.innerHTML = "";
  btnAll.classList.add('active');
  btnFrelance.classList.remove('active');
  btnPessoal.classList.remove('active');

  projects.forEach((item) => {
    listProjects.innerHTML += `          <div class="c-main__cardProject">
              <div class="c-main__preview">
                <img src="${item.img}" alt="">
              </div>
  
              <span class="c-main__category">${item.type}</span>
              <h3 class="c-main__titleProject">${item.title}</h3>
  
              <div class="c-main__links">
                <a href="${item.linkSite}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="${item.linkGithub}"><i class="fa-solid fa-code"></i></a>
              </div>
            </div>
  `;
  });
});
btnAll.click();

btnFrelance.addEventListener('click', () => {
  listProjects.innerHTML = "";
  btnFrelance.classList.add('active');
  btnAll.classList.remove('active');
  btnPessoal.classList.remove('active');

  const freelancesArr = projects.filter((item) => {
    return item.type === "FREELANCE";
  });

  freelancesArr.forEach((item) => {
    listProjects.innerHTML += `          <div class="c-main__cardProject">
              <div class="c-main__preview">
                <img src="${item.img}" alt="">
              </div>
  
              <span class="c-main__category">${item.type}</span>
              <h3 class="c-main__titleProject">${item.title}</h3>
  
              <div class="c-main__links">
                <a href="${item.linkSite}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="${item.linkGithub}"><i class="fa-solid fa-code"></i></a>
              </div>
            </div>
  `;
  });
});

btnPessoal.addEventListener('click', () => {
  listProjects.innerHTML = "";
  btnPessoal.classList.add('active');
  btnAll.classList.remove('active');
  btnFrelance.classList.remove('active');

  const pessoalArr = projects.filter((item) => {
    return item.type === "PESSOAL";
  })

  pessoalArr.forEach((item) => {
    listProjects.innerHTML += `          <div class="c-main__cardProject">
              <div class="c-main__preview">
                <img src="${item.img}" alt="">
              </div>
  
              <span class="c-main__category">${item.type}</span>
              <h3 class="c-main__titleProject">${item.title}</h3>
  
              <div class="c-main__links">
                <a href="${item.linkSite}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="${item.linkGithub}"><i class="fa-solid fa-code"></i></a>
              </div>
            </div>
  `;
  });
});