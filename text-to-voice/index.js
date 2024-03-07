const $textArea = document.getElementById('text')
const $button = document.getElementById('btn-convert')

$button.addEventListener('click', () => {
  const text = $textArea.value
  const utterance = new SpeechSynthesisUtterance()

  utterance.text = text
  utterance.voice = window.speechSynthesis.getVoices()[0]

  window.speechSynthesis.speak(utterance)
})
