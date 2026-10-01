const root = document.documentElement
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
const switcher = document.querySelector('.theme-switcher')
const options = switcher?.querySelectorAll('input[name="theme-preference"]')
const popover = switcher?.querySelector('[popover]')
const trigger = switcher?.querySelector('button')
let preference = root.dataset.themePreference || 'system'

function applyTheme(value) {
  preference = ['light', 'dark'].includes(value) ? value : 'system'
  root.dataset.themePreference = preference
  root.dataset.theme = preference === 'dark' || (preference === 'system' && systemTheme.matches) ? 'dark' : 'light'
  options?.forEach(option => { option.checked = option.value === preference })
}

if (switcher) {
  applyTheme(preference)
  switcher.hidden = false
  switcher.addEventListener('change', (event) => {
    if (!event.target.matches('input[name="theme-preference"]')) return
    applyTheme(event.target.value)
    try {
      if (preference === 'system') localStorage.removeItem('theme')
      else localStorage.setItem('theme', preference)
    } catch { /* Theme switching still works when storage is unavailable. */ }
    popover.hidePopover()
    trigger.focus({ preventScroll: true })
  })
}

systemTheme.addEventListener('change', () => {
  if (preference === 'system') applyTheme('system')
})

window.addEventListener('storage', (event) => {
  if (event.key === 'theme' || event.key === null) applyTheme(event.newValue)
})
