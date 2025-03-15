// Mostras/cerrar Scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector("header");
  
  if (currentScroll > lastScrollTop) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const tabBtnInstalacion = document.querySelector('.guide-tab-link[data-tab="instalacionTab"]');
const tabBtnInfo        = document.querySelector('.guide-tab-link[data-tab="infoTab"]');
const guidesTabsContent = document.querySelector('.guides-tabs-content-wrapper');

if (tabBtnInstalacion && tabBtnInfo && guidesTabsContent) {
  tabBtnInstalacion.addEventListener('click', () => {
    tabBtnInstalacion.classList.add('active');
    tabBtnInfo.classList.remove('active');
    guidesTabsContent.style.transform = 'translateX(0)';
  });

  tabBtnInfo.addEventListener('click', () => {
    tabBtnInfo.classList.add('active');
    tabBtnInstalacion.classList.remove('active');
    guidesTabsContent.style.transform = 'translateX(-50%)';
  });
}


const btnCategorias = document.querySelector('.tab-link[data-tab="categorias"]');
const btnDestacados = document.querySelector('.tab-link[data-tab="destacados"]');
const tabsContentWrapper = document.querySelector('.tabs-content-wrapper');

if (btnCategorias && btnDestacados && tabsContentWrapper) {
  btnCategorias.addEventListener('click', () => {
    btnCategorias.classList.add('active');
    btnDestacados.classList.remove('active');
    tabsContentWrapper.style.transform = 'translateX(0)';
  });

  btnDestacados.addEventListener('click', () => {
    btnDestacados.classList.add('active');
    btnCategorias.classList.remove('active');
    tabsContentWrapper.style.transform = 'translateX(-50%)';
  });
}
