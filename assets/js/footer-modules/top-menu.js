const menuButton = document.querySelector('.menu__button')
const menuList = document.querySelector('.menu__list')
const root = document.documentElement
const navigation = menuButton.closest('nav')
let scrollPosition = 0

function setMenuOpen(open) {
  const wasOpen = menuButton.getAttribute('aria-expanded') === 'true'
  if (open === wasOpen) return

  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.classList.toggle('menu__button--open', open)
  menuList.classList.toggle('menu__list--open', open)

  if (open) {
    scrollPosition = window.scrollY
    root.style.setProperty('--menu-scroll-offset', `${-scrollPosition}px`)
    root.classList.add('mobile-menu-open')
  } else {
    root.classList.remove('mobile-menu-open')
    root.style.removeProperty('--menu-scroll-offset')
    window.scrollTo({ top: scrollPosition, behavior: 'instant' })
  }
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})

menuList.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false)
})

// This is a disclosure, so Tab may leave it. Unlock the page before
// revealing the newly focused element rather than trapping focus.
document.addEventListener('focusin', (event) => {
  if (menuButton.getAttribute('aria-expanded') !== 'true' || navigation.contains(event.target)) return
  setMenuOpen(false)
  event.target.scrollIntoView({ block: 'nearest', behavior: 'instant' })
})

document.addEventListener('pointerdown', (event) => {
  if (!navigation.contains(event.target)) setMenuOpen(false)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
    menuButton.focus()
  }
})

window.addEventListener('resize', () => {
  if (getComputedStyle(menuButton).display === 'none') setMenuOpen(false)
})
