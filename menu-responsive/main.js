const btn = document.querySelector('#btnShowMenu')
const links = document.querySelector('.links')

btn.addEventListener('click', (e) => {
  links.classList.toggle('collapsed')
})
