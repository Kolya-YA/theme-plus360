(() => {
  let theme;
  try { theme = localStorage.getItem('theme'); } catch { /* System preference remains available. */ }
  const preference = ['light', 'dark'].includes(theme) ? theme : 'system';
  const dark = preference === 'dark' || (preference === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
