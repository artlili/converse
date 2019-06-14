class BurgerMenu {
  constructor(burger, menu) {
    this.burger = burger;
    this.menu = menu;

    this.burger.addEventListener('click', event => {
      this.menu.classList.toggle('open');
    });
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const burger = document.querySelector('.navbar__burger');
  const menu = document.querySelector('.navbar__menu');
  const burgerMenu = new BurgerMenu(burger, menu);
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 800) {
    document.querySelector('.navbar__menu').classList.remove('open');
  }
});

document.addEventListener("click", function(event) {
  const openMenu = document.querySelector(".navbar__menu");
	if (event.target.closest(".navbar__burger")) return;

	openMenu.classList.remove('open');
});

export default BurgerMenu;
