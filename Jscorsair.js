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

const tabBtnDestacados = document.querySelector('.guide-tab-link[data-tab="destacados"]');
const tabBtnRecientes   = document.querySelector('.guide-tab-link[data-tab="recientes"]');
const guidesTabsContent = document.querySelector('.guides-tabs-content-wrapper');

if (tabBtnDestacados && tabBtnRecientes && guidesTabsContent) {
  tabBtnDestacados.addEventListener('click', () => {
    tabBtnDestacados.classList.add('active');
    tabBtnRecientes.classList.remove('active');
    guidesTabsContent.style.transform = 'translateX(0)';
  });

  tabBtnRecientes.addEventListener('click', () => {
    tabBtnRecientes.classList.add('active');
    tabBtnDestacados.classList.remove('active');
    guidesTabsContent.style.transform = 'translateX(-50%)';
  });
}


