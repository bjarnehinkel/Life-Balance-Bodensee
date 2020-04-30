const pageIdentifier = document.querySelector('.page-identifier');

const swapActive = () =>{
  const navLink = document.querySelector(`[data-page-link='${pageIdentifier.dataset.page}']`);
  const navLinkActive = document.querySelector('.nav-element.active');
  navLinkActive.classList.remove('active');
  navLink.classList.add('active');
};

export { swapActive };

