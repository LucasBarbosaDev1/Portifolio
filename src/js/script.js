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

// funcao que monta os cards de projeto
function cardProject(img, alt, type, title, technologies, linkSite, linkGithub) {
  let html = `
    <div class="c-main__cardProject">
      <div class="c-main__preview">
        <img src="${img}" alt=${alt}>
      </div>

      <span class="c-main__category">${type}</span>

      <h3 class="c-main__titleProject">${title}</h3>

      <div class="c-main__technologies">
        ${technologies}
      </div>

      <div class="c-main__links">
        <a href="${linkSite}" target="_blank" aria-label="link-do-site"><i class="fa-regular fa-regular fa-eye"></i></a>
          
        <a href="${linkGithub}" target="_blank" aria-label="link-do-repositório"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  `;

  return html;
};

// requisicao ao headless CMS
const cardProduct = document.querySelector('.cardProduct');
const client = contentful.createClient({
  space: 'xgtiddt5x05g',
  environment: 'master',
  accessToken: '6WgSiu0DVitqSf-aKTzdRgtrccPr1MfVBjRoyI6FH8E'
})
client.getEntries({
  content_type: 'projectPortifolio'
})
.then((response) => {

  const arr = response.items
  const pessoal = arr.filter(item => item.fields.typeProject === "PESSOAL");
  const freelance = arr.filter(item => item.fields.typeProject === "FREELANCE");  

  function renderProjects(array) {
    
    array.forEach(element => {
      
      const imgPreview = element.fields.imgPreview.fields.file.url;
      const imgAlt = element.fields.imgPreview.fields.title;
      const typeProject = element.fields.typeProject;
      const titleProject = element.fields.title;
      const linkSite = element.fields.linkSite;
      const linkGithub = element.fields.linkGithub;
      const arrTechnologies = element.fields.technologies;
      let technologies = "";

      for (let i = 0; i < arrTechnologies.length; i++) {
        technologies += `<img width='30' height='30' src=${arrTechnologies[i].fields.file.url} alt=${arrTechnologies[i].fields.title}/>`
        
      }
  
      listProjects.innerHTML += cardProject(imgPreview, imgAlt, typeProject, titleProject, technologies, linkSite, linkGithub)
      
    });
  }

  listProjects.innerHTML = "";
  renderProjects(arr);

  btnAll.addEventListener('click', () => {

    btnAll.classList.add('active');
    btnFrelance.classList.remove('active');
    btnPessoal.classList.remove('active');

    listProjects.innerHTML = "";

    renderProjects(arr);

  });

  btnFrelance.addEventListener('click', () => {

    btnFrelance.classList.add('active');
    btnAll.classList.remove('active');
    btnPessoal.classList.remove('active');

    listProjects.innerHTML = "";

    renderProjects(freelance)

  });

  btnPessoal.addEventListener('click', () => {

    btnPessoal.classList.add('active');
    btnAll.classList.remove('active');
    btnFrelance.classList.remove('active');

    listProjects.innerHTML = "";

    renderProjects(pessoal)

  });

});