(() => {
  // This script sets the theme based on user preference or system settings
  const theme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', theme === 'dark' || (!theme && prefersDark));
  console.log('Theme set to:', theme || (prefersDark ? 'dark' : 'light'));
})();