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

// Keep direct image links as a no-JavaScript fallback.
(() => {
  const viewer = document.querySelector('.screen-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  let trigger;
  document.querySelectorAll('[data-screen]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      const image = viewer.querySelector('.viewer-image');
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      viewer.showModal();
      viewer.scrollTop = 0;
      document.body.classList.add('viewer-open');
    });
  });
  viewer.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      viewer.querySelector('.viewer-close').focus();
    }
  });
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    const bounds = viewer.getBoundingClientRect();
    if (event.target === viewer && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
