const menuButton = document.querySelector('.menu__button')
const menuList = document.querySelector('.menu__list')

menuButton.addEventListener('click', () => {
  const isMenuOpen = menuButton.getAttribute('aria-expanded') === 'true' || false
  menuButton.setAttribute('aria-expanded', !isMenuOpen)
  menuButton.classList.toggle('menu__button--open')
  menuList.classList.toggle('menu__list--open')
})