const API_KEY = '23ab0c84e08f4b1ec4a54df6fa709a80'
const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather'
const KELVIN = 273.15
const _btn = document.getElementById('btn')

_btn.addEventListener('click', () => {
  const _city = document.getElementById('cityInput').value

  if (_city) {
    getDataWeather(_city)
  }
})

function getDataWeather (city) {
  fetch(`${URL_BASE}?q=${city}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => showData(res))
}

function showData (res) {
  const _code = document.getElementById('climateData')
  _code.innerHTML = ''
  const city = res.name
  const country = res.sys.country
  const temp = res.main.temp
  const humity = res.main.humidity
  const icon = res.weather[0].icon

  const countryToFlag = country.toLowerCase()

  const _titleCity = document.createElement('h2')
  _titleCity.textContent = `${city} - `
  _code.appendChild(_titleCity)

  const _imgFlag = document.createElement('img')
  _imgFlag.classList.add('flag')
  _imgFlag.src = `https://openweathermap.org/images/flags/${countryToFlag}.png`
  _code.appendChild(_imgFlag)

  const _temp = document.createElement('h3')
  _temp.textContent = `🌡 Temp: ${Math.floor(temp - KELVIN)}°C`
  _code.appendChild(_temp)

  const _humity = document.createElement('h3')
  _humity.textContent = `💧 Humity: ${humity}%`
  _code.appendChild(_humity)

  const _icon = document.createElement('img')
  _icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
  _code.appendChild(_icon)
}
