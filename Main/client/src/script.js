  const menuButton = document.getElementById('menuButton');
  const dropdownDivider = document.getElementById('dropdownDivider');

  menuButton.addEventListener('click', () => {
    dropdownDivider.classList.toggle('hidden');
    if (!dropdownDivider.classList.contains('hidden')) {
      const buttonRect = menuButton.getBoundingClientRect();
      dropdownDivider.style.top = buttonRect.bottom + 'px';
      dropdownDivider.style.left = buttonRect.left + 'px';
    }
  });