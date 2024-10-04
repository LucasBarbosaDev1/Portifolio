// sessão nav ativa
const cHeader = document.querySelector('#home');
const cTech = document.querySelector('#tech');
const cProjects = document.querySelector('#projects');
const navHome = document.querySelector('.homeNav');
const navTech = document.querySelector('.techNav');
const navProjects = document.querySelector('.projectsNav');

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

async function dataBase() {
  const response = await fetch('src/dataBase/dataBase.json');
  const data = await response.json();
  const arrData = [...data];

  return arrData;
};

dataBase()
  .then(dados => {
    btnAll.addEventListener('click', () => {
    listProjects.innerHTML = "";
    btnAll.classList.add('active');
    btnFrelance.classList.remove('active');
    btnPessoal.classList.remove('active');

    dados.forEach((item) => {
      listProjects.innerHTML += 
        `<div class="c-main__cardProject">
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
        </div>`;
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
        `<div class="c-main__cardProject">
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
        </div>`;
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
          `<div class="c-main__cardProject">
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
          </div>`;
      });
    });
  })
  .catch(error => {
    console.error(error);
  });