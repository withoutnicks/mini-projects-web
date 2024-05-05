const $body = document.querySelector('body')

$body.addEventListener('click', (e) => {
  const XP = e.offsetX
  const YP = e.offsetY

  const _span = document.createElement('span')
  _span.style.left = XP + 'px'
  _span.style.top = YP + 'px'

  const size = Math.random() * 100
  _span.style.width = size + 'px'
  _span.style.height = size + 'px'

  $body.appendChild(_span)
  setTimeout(() => {
    _span.remove()
  }, 2000)
})
