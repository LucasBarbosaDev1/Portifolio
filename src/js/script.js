// sessão nav ativa
const cHeader = document.querySelector('#home');
const cTech = document.querySelector('#tech');
const cProjects = document.querySelector('#projects');
const navHome = document.querySelector('.homeNav');
const navTech = document.querySelector('.techNav');
const navProjects = document.querySelector('.projectsNav');

// efeito active no nav
window.addEventListener('scroll', ()=> {
  const positionHome = cHeader.offsetHeight - 1;
  const positionTech = positionHome + cTech.offsetHeight - 1;

  if (window.scrollY <= positionHome) {
    navHome.classList.add('active');
    navTech.classList.remove('active');
    
  } else if (window.scrollY > positionHome && window.scrollY <= positionTech) {
    navTech.classList.add('active');
    navHome.classList.remove('active');
    navProjects.classList.remove('active');

  } else if (window.scrollY > positionTech) {
    navProjects.classList.add('active');
    navTech.classList.remove('active');
  }
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

const listProjects = document.querySelector('.c-main__listProject');
const btnAll = document.querySelector('#all');
const btnFrelance = document.querySelector('#freelance');
const btnPessoal = document.querySelector('#pessoal');

// requisicao ao banco de dados local
async function dataBase() {
  const response = await fetch('src/dataBase/dataBase.json');
  const data = await response.json();
  const arrData = [...data];

  return arrData;
};

// funcao que monta os cards de projeto
function cardProject(img, type, technologies, title, linkSite, arialLabelSite, linkGithub, arialLabelGithub) {
  let html = `<div class="c-main__cardProject">
      <div class="c-main__preview">
        <img src="${img}" alt="">
      </div>

        <span class="c-main__category">${type}</span>

        <div>${technologies.join('')}</div>

        <h3 class="c-main__titleProject">${title}</h3>

        <div class="c-main__links">
          <a href="${linkSite}" target="_blank" aria-label="${arialLabelSite}"><i class="fa-regular fa-regular fa-eye"></i></a>
            
          <a href="${linkGithub}" target="_blank" aria-label="${arialLabelGithub}"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>`;

  return html;
};

// faz a renderizacao dos cards de projeto
dataBase()
  .then(dados => {
    btnAll.addEventListener('click', () => {
    listProjects.innerHTML = "";
    btnAll.classList.add('active');
    btnFrelance.classList.remove('active');
    btnPessoal.classList.remove('active');

    dados.forEach((item) => {
      listProjects.innerHTML += 
        cardProject(item.img, item.type, item.technologies, item.title, item.linkSite, item.arialLabelSite, item.linkGithub, item.arialLabelGithub)

      });
    });

    btnAll.click();

    btnFrelance.addEventListener('click', () => {
    listProjects.innerHTML = "";
    btnFrelance.classList.add('active');
    btnAll.classList.remove('active');
    btnPessoal.classList.remove('active');

    const freelancesArr = dados.filter((item) => {
      return item.type === "FREELANCE";
    });

    freelancesArr.forEach((item) => {
      listProjects.innerHTML += 
        cardProject(item.img, item.type, item.technologies, item.title, item.linkSite, item.arialLabelSite, item.linkGithub, item.arialLabelGithub)

      });
    });

    btnPessoal.addEventListener('click', () => {
      listProjects.innerHTML = "";
      btnPessoal.classList.add('active');
      btnAll.classList.remove('active');
      btnFrelance.classList.remove('active');

      const pessoalArr = dados.filter((item) => {
        return item.type === "PESSOAL";
      });

      pessoalArr.forEach((item) => {
        listProjects.innerHTML += 
          cardProject(item.img, item.type, item.technologies, item.title, item.linkSite, item.arialLabelSite, item.linkGithub, item.arialLabelGithub)

      });
    });
  })
  .catch(error => {
    console.error(error);
  });