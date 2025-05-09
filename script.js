const openBtn = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.getElementById('home');

openBtn.addEventListener('click', () => {
  home.classList.add('active');
  closeBtn.classList.add('show');
  openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  home.classList.remove('active');
  closeBtn.classList.remove('show');
  openBtn.style.display = 'block';
});
