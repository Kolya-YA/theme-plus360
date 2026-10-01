(() => {
  let theme;
  try { theme = localStorage.getItem('theme'); } catch { /* System preference remains available. */ }
  const dark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
