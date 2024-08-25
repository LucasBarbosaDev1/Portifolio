// sessão nav ativa
const nav = document.querySelector('.c-header__nav');
const homeNav = document.querySelector('.homeNav');
const techNav = document.querySelector('.techNav');
const projectsNav = document.querySelector('.projectsNav');

const header = document.querySelector('.c-header');
const secTech = document.querySelector('.c-main__secTech');
const main__projects = document.querySelector('.c-main__projects')

window.addEventListener('scroll', () => {
  const navTop = nav.getBoundingClientRect().top;

  const headerTop = header.getBoundingClientRect().top;
  const headerBottom = headerTop + header.offsetHeight;

  const techTop = secTech.getBoundingClientRect().top;
  const techBottom = techTop + secTech.offsetHeight;

  const projectsTop = main__projects.getBoundingClientRect().top;
  const projectsBottom = projectsTop + main__projects.offsetHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;

  if (navTop >= headerTop && navTop < headerBottom) {
    homeNav.classList.add('active');
    techNav.classList.remove('active');
    projectsNav.classList.remove('active');
  };

  if (navTop >= techTop && navTop < techBottom) {
    homeNav.classList.remove('active');
    techNav.classList.add('active');
    projectsNav.classList.remove('active');
  };

  if (navTop >= projectsTop && navTop < projectsBottom || scrollTop + window.innerHeight >= pageHeight) {
    homeNav.classList.remove('active');
    techNav.classList.remove('active');
    projectsNav.classList.add('active');
  };
});


// efeito typing
const myName = document.querySelector('.c-header__title--emphasis');
const text = "Lucas Barbosa"
let index = 0;

function typeWrite() {
  if (index < text.length) {
    myName.textContent += text[index];
    index++;
    setTimeout(typeWrite, 75)
  };
};

typeWrite();

setInterval(() => {
  if (index === text.length) {
    myName.textContent = "";
    index = 0;
    typeWrite();
  };
}, 3000)

// projetos
const projects = [
  {
    img: "src/assets/relatorio-mar/preview-mar.webp",
    altText: "",
    type: "FREELANCE",
    technologies: [
      '<img width="30" height="30" src="https://img.icons8.com/color/60/html-5--v1.png" alt="html-5--v1"/>',
      '<img width="30" height="30" src="https://img.icons8.com/color/60/css3.png" alt="css3"/>',
      '<img width="30" height="30" src="https://img.icons8.com/color/60/sass.png" alt="sass"/>',
      '<img width="30" height="30" src="https://img.icons8.com/color/60/typescript.png" alt="typescript"/>'
    ],
    title: "GERADOR DE RELATÓRIO VIA WHATSAPP",
    linkSite: "https://relatorio-mar-reciclagem.netlify.app/",
    linkGithub: "https://github.com/LucasBarbosaDev1/gerador-de-relatorio-MAR",
    arialLabelSite: "link-do-site",
    arialLabelGithub: "link-do-repositório"
  },
  {
    img: "src/assets/relatorio-mar/preview-pigHouse.webp",
    altText: "preview-do-projeto",
    type: "FREELANCE",
    technologies: [
      '<img width="30" height="30" src="https://img.icons8.com/color/60/html-5--v1.png" alt="html-5--v1"/>',
      '<img width="30" height="30" src="https://img.icons8.com/color/60/css3.png" alt="css3"/>',
      '<img width="30" height="30" src="https://img.icons8.com/color/60/sass.png" alt="sass"/>',
      '<img width="30" height="30" src="https://img.icons8.com/color/60/typescript.png" alt="typescript"/>'
    ],
    title: "E-COMMERCE VIA WHATSAPP",
    linkSite: "https://test-pighouse.netlify.app",
    linkGithub: "https://github.com/LucasBarbosaDev1/pig-house",
    arialLabelSite: "link-do-site",
    arialLabelGithub: "link-do-repositório"
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

              <div>${item.technologies.join('')}</div>

              <h3 class="c-main__titleProject">${item.title}</h3>
  
              <div class="c-main__links">
                <a href="${item.linkSite}" target="_blank" aria-label="${item.arialLabelSite}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                
                <a href="${item.linkGithub}" target="_blank" aria-label="${item.arialLabelGithub}"><i class="fa-solid fa-code"></i></a>
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

              <div>${item.technologies.join('')}</div>

              <h3 class="c-main__titleProject">${item.title}</h3>
  
              <div class="c-main__links">
                <a href="${item.linkSite}" target="_blank" aria-label="${item.arialLabelSite}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                
                <a href="${item.linkGithub}" target="_blank" aria-label="${item.arialLabelGithub}"><i class="fa-solid fa-code"></i></a>
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

              <div>${item.technologies.join('')}</div>

              <h3 class="c-main__titleProject">${item.title}</h3>
  
              <div class="c-main__links">
                <a href="${item.linkSite}" target="_blank" aria-label="${item.arialLabelSite}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                
                <a href="${item.linkGithub}" target="_blank" aria-label="${item.arialLabelGithub}"><i class="fa-solid fa-code"></i></a>
              </div>
            </div>
  `;
  });
});