let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
const timerRef = document.querySelector('.timerDisplay')
let int = null

document.getElementById('startTimer').addEventListener('click', () => {
  console.log('Starting')
  if (int !== null) {
    clearInterval(int)
  }
  int = setInterval(displayTimer, 10)
})

document.getElementById('pauseTimer').addEventListener('click', () => {
  clearInterval(int)
})

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(int);
  [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
  timerRef.innerHTML = '00 : 00 : 00 : 000 '
})

function displayTimer () {
  miliseconds += 10

  if (miliseconds === 1000) {
    miliseconds = 0
    seconds++

    if (seconds === 60) {
      seconds = 0
      minutes++

      if (minutes === 60) {
        minutes = 0
        hours++
      }
    }
  }

  const h = hours < 10 ? '0' + hours : hours
  const m = minutes < 10 ? '0' + minutes : minutes
  const s = seconds < 10 ? '0' + seconds : seconds
  const ms = miliseconds < 10 ? '00' + miliseconds : miliseconds < 100 ? '0' + miliseconds : miliseconds

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `
}
