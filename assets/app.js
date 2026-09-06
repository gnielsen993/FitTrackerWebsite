// Preview real app screens without recoloring or reconstructing their interface.
(() => {
  const themes = {
    forest: { file: 'home', name: 'Forest', description: 'Forest: a clean dark look with a teal accent. Included free.' },
    dracula: { file: 'theme-dracula', name: 'Dracula', description: 'Dracula: a deeper dark palette with a purple accent. Available with Pro.' },
    barbie: { file: 'theme-barbie', name: 'Barbie', description: 'Barbie: a pink accent with more personality. Available with Pro.' }
  };
  const image = document.getElementById('theme-preview');
  if (!image) return;
  document.querySelectorAll('[data-theme]').forEach(button => {
    button.addEventListener('click', () => {
      const choice = themes[button.dataset.theme];
      if (!choice) return;
      image.src = `assets/images/screenshots/${choice.file}.png`;
      image.alt = `Stack Home screen in the ${choice.name} dark theme`;
      document.getElementById('theme-description').textContent = choice.description;
      document.querySelectorAll('[data-theme]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    });
  });
})();
