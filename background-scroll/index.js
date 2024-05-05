const $bg = document.querySelector('#bg')

window.addEventListener('scroll', () => {
  $bg.style.opacity = 1 - window.pageXOffset / 900
  $bg.style.backgroundSize = 140 - window.pageYOffset / 12 + '%'
})
