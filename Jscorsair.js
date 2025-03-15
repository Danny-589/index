// Ocultar/mostrar header al hacer scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector("header");
  
  if (currentScroll > lastScrollTop) {
    // Scrolleando hacia abajo -> ocultar header
    header.classList.add("hide-header");
  } else {
    // Scrolleando hacia arriba -> mostrar header
    header.classList.remove("hide-header");
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ---------------------------------------------
// Tabs de "Instalación y Sistemas Operativos (SO)"
// ---------------------------------------------
const tabBtnInstalacion = document.querySelector('.guide-tab-link[data-tab="instalacionTab"]');
const tabBtnInfo        = document.querySelector('.guide-tab-link[data-tab="infoTab"]');
const guidesTabsContent = document.querySelector('.guides-tabs-content-wrapper');

if (tabBtnInstalacion && tabBtnInfo && guidesTabsContent) {
  // Al hacer clic en "Cómo instalar un SO"
  tabBtnInstalacion.addEventListener('click', () => {
    tabBtnInstalacion.classList.add('active');
    tabBtnInfo.classList.remove('active');
    // Mueve el contenedor a la primera pestaña (0%)
    guidesTabsContent.style.transform = 'translateX(0)';
  });

  // Al hacer clic en "Información de SO"
  tabBtnInfo.addEventListener('click', () => {
    tabBtnInfo.classList.add('active');
    tabBtnInstalacion.classList.remove('active');
    // Mueve el contenedor a la segunda pestaña (-50%)
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
    // Mueve el contenedor de tabs a la primera mitad (0%)
    tabsContentWrapper.style.transform = 'translateX(0)';
  });

  btnDestacados.addEventListener('click', () => {
    btnDestacados.classList.add('active');
    btnCategorias.classList.remove('active');
    // Mueve el contenedor de tabs a la segunda mitad (-50%)
    tabsContentWrapper.style.transform = 'translateX(-50%)';
  });
}
