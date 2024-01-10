import { contactFormValidator } from "./form-validator"

const cForm = document.querySelector('#cform')

if (cForm) {
  console.log('Contact page')
  cForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    sendForm(cForm)
  })
}

async function sendForm(form) {
  const formData = new FormData(form)
  const validatorResult = contactFormValidator(formData)

  console.log('Validation result', validatorResult)
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
    console.log('Response', await response.json());
  } catch (error) {
    console.error(error)
  }
}