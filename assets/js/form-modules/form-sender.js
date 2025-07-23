import { contactFormValidator } from "./form-validator"
import { showFormErrors, showFormSuccess } from "./form-messages"

const cForm = document.querySelector('#cform')

if (cForm) {
  console.log('Contact page')
  cForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    sendForm(cForm)
  })
}

showFormSuccess()

async function sendForm(form) {
  const formData = new FormData(form)
  const validatorResult = contactFormValidator(formData)
  
  if (Object.keys(validatorResult).length > 0) {
    showFormErrors(form, validatorResult)
    return
  }

  console.log('Validation passed')
  // showFormSuccess(form)

  // try {
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   console.log('Response', await response.json());
  // } catch (error) {
  //   console.error(error)
  // }
}