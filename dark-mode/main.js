const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')

  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = '🌜 - Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = '⭐ - Light mode'
  }
})
