import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'

const firebaseConfig = {
  /*
   * Get your credentials here:
   * https://support.google.com/firebase/answer/7015592?hl=es#zippy=%2Cen-este-art%C3%ADculo
   */
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// App
const $form = document.getElementById('form')
const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const REGEX_PASSWORD = /^[A-Za-z]\w{6,14}$/

$form.addEventListener('submit', async (e) => {
  e.preventDefault()
  document.getElementById('btn').disable = true

  // Validations
  const $name = document.getElementById('name')
  const $errName = document.getElementById('nameError')
  if ($name.value.trim() === '') {
    $errName.innerText = 'Fail: You must enter a name'
  } else {
    $errName.innerText = ''
  }

  const $email = document.getElementById('email')
  const $errEmail = document.getElementById('emailError')
  if (!REGEX_EMAIL.test($email.value)) {
    $errEmail.innerText = 'Fail: Invalid email'
  } else {
    $errEmail.innerText = ''
  }

  const $password = document.getElementById('password')
  const $errPassword = document.getElementById('passwordError')
  if (!REGEX_PASSWORD.test($password.value)) {
    $errPassword.innerText = 'Fail: Invalid password'
  } else {
    $errPassword.innerText = ''
  }

  if (!$name.value.trim() !== '' && $email.value.trim() !== '' && $password.value.trim() !== '') {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: $name.value,
        email: $email.value,
        password: $password.value
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    document.getElementById('success').style.display = 'block'
    $form.reset()
    setTimeout(() => {
      document.getElementById('success').style.display = 'none'
    }, 3000)
  }
})
