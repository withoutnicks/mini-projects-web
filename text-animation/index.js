const $container = document.querySelector('.div')

const jobs = ['developer', 'youtuber', 'chef', 'instructor']
let jidx = 0
let charidx = 0

updateText()
function updateText () {
  charidx++
  $container.innerHTML = /* html */ `
    <h1>Hello, i'm ${jobs[jidx].slice(0, charidx)}</h1>
  `
  if (charidx === jobs[jidx].length) {
    jidx++
    charidx = 0
  }

  if (jidx === jobs.length) {
    jidx = 0
  }
  setTimeout(updateText, 400)
}
