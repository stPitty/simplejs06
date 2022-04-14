const nav = Array.from(window.document.querySelectorAll('.menu_sub'));
let openMenu


nav.forEach((menu) => {
  const title = menu.closest('.menu__item');
  title.onclick = () => {
    title.querySelector('.menu__link').href = '#';
    if (menu.classList.contains('menu_active')) {
      menu.classList.remove('menu_active')
    } else {
      if (openMenu) {
        openMenu.classList.remove('menu_active');
      }
      openMenu = menu
      menu.classList.add('menu_active')
    }
  }
})