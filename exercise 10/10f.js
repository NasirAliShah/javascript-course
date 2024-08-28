function toggleButton(buttonType) {
  const button = document.querySelector(buttonType);
  if (!button.classList.contains('is-toggled')) {
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}