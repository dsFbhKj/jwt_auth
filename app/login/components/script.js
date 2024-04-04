// scripts.js
const handleClick = () => {
  const modal = document.getElementById('my_modal_4');
  if (modal) {
    modal.showModal();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const welcomeButton = document.getElementById('welcome_button');
  if (welcomeButton) {
    welcomeButton.addEventListener('click', handleClick);
  }
});
