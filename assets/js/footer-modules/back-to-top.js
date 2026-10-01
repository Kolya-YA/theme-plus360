const backToTop = document.querySelector('.back-to-top')
const mainContent = document.getElementById('main-content')
const skipLink = document.querySelector('.skip-link')

skipLink?.addEventListener('click', () => {
  mainContent?.focus({ preventScroll: true })
})

if (backToTop) {
  const updateVisibility = () => {
    const hidden = window.scrollY < window.innerHeight / 2 ||
      document.documentElement.classList.contains('mobile-menu-open')
    if (hidden && document.activeElement === backToTop) {
      mainContent?.focus({ preventScroll: true })
    }
    backToTop.hidden = hidden
  }

  backToTop.addEventListener('click', () => {
    mainContent?.focus({ preventScroll: true })
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    })
  })

  window.addEventListener('scroll', updateVisibility, { passive: true })
  window.addEventListener('resize', updateVisibility)
  new MutationObserver(updateVisibility).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
  updateVisibility()
}
