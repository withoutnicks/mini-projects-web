const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  const $d = document.getElementById('day').value
  const $m = document.getElementById('month').value
  const $y = document.getElementById('year').value

  if ($d.trim() === '' || $m.trim() === '' || $y.trim() === '') {
    document.getElementById('age').innerHTML = 'Please enter a date.'
    return
  }

  try {
    const date = new Date()
    let d = date.getDate()
    let m = 1 + date.getMonth()
    let y = date.getFullYear()

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if ($d > d) {
      d = d + month[m - 1]
      m = m - 1
    }

    if ($m > m) {
      m = m + 12
      y = y - 1
    }

    const days = d - $d
    const months = m - $m
    const years = y - $y

    if (years < 0 || months < 0 || days < 0) {
      document.getElementById('age').innerHTML = 'Please enter a valid date.'
    } else {
      document.getElementById('age').innerHTML = `You have lived ${years} Years ${months} Months and ${days} Days`
    }
  } catch (error) {
    document.getElementById('age').innerHTML = 'An error occurred. Please try again.'
  }
})
