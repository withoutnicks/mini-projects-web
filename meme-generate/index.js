const $ = selector => document.getElementById(selector)

const meme = $('meme')
const btnMeme = $('btnMeme')
const urlAPI = 'https://meme-api.com/gimme/'
// const subReddits = ['catmemes', 'wholesomemes', 'me_irl']

const getMeme = () => {
  btnMeme.disabled = true

  // const getSubReddit = subReddits[Math.floor(Math.random() * subReddits.length)]

  fetch(urlAPI + 'TheVirginZone')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    })
    .then(data => {
      const imgMeme = new Image()
      imgMeme.onload = () => {
        meme.src = data.url
        btnMeme.disabled = false
      }
      imgMeme.src = data.url
    })
    .catch(error => {
      console.error('Error fetching memingo', error)
      btnMeme.disabled = false
    })
}

btnMeme.addEventListener('click', getMeme)
window.addEventListener('load', getMeme)
