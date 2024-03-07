/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const $ = selector => document.getElementById(selector)

const pickColor = $('pick-color')
const error = $('error')
const fileInput = $('file')
const image = $('image')
const hexRef = $('hex-reference')
const rgbRef = $('rgb-reference')
const pickedColorRef = $('picked-color-ref')
let eyeDropper

window.onload = () => {
  if ('EyeDropper' in window) {
    pickColor.classList.remove('hide')
    eyeDropper = new EyeDropper()
  } else {
    error.classList.remove('hide')
    error.innerText = 'Your browser not support this funtion'
    pickColor.classList.add('hide')
    return false
  }
}

const colorSelector = async () => {
  await eyeDropper
    .open()
    .then((colorValue) => {
      error.classList.add('hide')

      const hexValue = colorValue.sRGBHex

      const rgbArray = []
      for (let idx = 1; idx < hexValue.length; idx += 2) {
        rgbArray.push(parseInt(hexValue[idx] + hexValue[idx + 1], 16))
        console.log(rgbArray)
      }
      const rgbValue = `rgb(${rgbArray})`
      console.log(rgbValue)

      result.style.display = 'flex'
      hexRef.value = hexValue
      rgbRef.value = rgbValue
      pickedColorRef.style.backgroundColor = hexValue
    })
    .catch((err) => {
      error.classList.remove('hide')

      if (err.toString().includes('AbortError')) {
        error.innerText = ''
      } else {
        error.innerText = err
      }
    })
}

pickColor.addEventListener('click', colorSelector)

fileInput.onchange = () => {
  result.style.display = 'flex'
  const reader = new FileReader()
  reader.readAsDataURL(fileInput.files[0])
  reader.onload = () => {
    image.setAttribute('src', reader.result)
  }
}

const copy = (textId) => {
  $(textId).select()
}
