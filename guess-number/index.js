const $btn = document.getElementById('btn')
const $input = document.getElementById('input-number')
const $message = document.getElementById('message')

const randomNumber = Math.floor(Math.random() * 100) + 1

$btn.addEventListener('click', () => {
  const userNumber = parseInt($input.value)
  if (isNaN(userNumber) || userNumber >= 101) {
    $message.innerText = 'Enter a valid number'
    return
  }

  if (randomNumber === userNumber) {
    $message.innerText = 'You Win 🎉'
    $input.disabled = true
  } else if (randomNumber > userNumber) {
    $message.innerText = 'The number is greater 🔼'
  } else {
    $message.innerText = 'The number is less 🔽'
  }
})
